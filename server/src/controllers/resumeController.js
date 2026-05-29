import fs from "fs";

import pdf from "pdf-parse-fixed";

import axios from "axios";

export const uploadResume = async (
  req,
  res
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const filePath =
      req.file.path;

    const dataBuffer =
      fs.readFileSync(
        filePath
      );

    const pdfData =
      await pdf(dataBuffer);

    const extractedText =
      pdfData.text;

    console.log(
      extractedText
    );

    const aiResponse =
      await axios.post(
        "http://127.0.0.1:8000/analyze-resume",

        {
          resume_text:
            extractedText,
        }
      );

    const analysis =
      aiResponse.data.analysis;

    res.status(200).json({
      message:
        "Resume analyzed successfully",

      extractedText,

      analysis,
    });
  } catch (error) {
    console.log(
      "RESUME ERROR:",
      error
    );

    res.status(500).json({
      message:
        "Resume upload failed",
    });
  }
};