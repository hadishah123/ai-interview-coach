import fs from "fs";

import pdf from "pdf-parse-fixed";

import axios from "axios";

export const uploadResume =
async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        message:
          "No file uploaded",
      });
    }

    const filePath =
      req.file.path;

    const dataBuffer =
      fs.readFileSync(
        filePath
      );

    const pdfData =
      await pdf(
        dataBuffer
      );

    const extractedText =
      pdfData.text;

    const aiResponse =
      await axios.post(
        `${process.env.AI_API_URL}/analyze-resume`,
        {
          resume_text:
            extractedText,
        }
      );

    fs.unlinkSync(
      filePath
    );

    return res.status(200).json({
      message:
        "Resume analyzed successfully",

      extractedText,

      analysis:
        aiResponse
        .data
        .analysis,
    });

  } catch (error) {

    console.log(
      "RESUME ERROR:"
    );

    console.log(
      error?.response?.data ||
      error.message
    );

    return res.status(500).json({
      message:
        "Resume upload failed",
    });
  }
};