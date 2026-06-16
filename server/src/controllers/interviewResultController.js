import prisma from "../config/prisma.js";

import { evaluateInterview } from "../services/interviewEvaluationService.js";

export const getInterviewResult =
async (
req,
res
) => {
try {

const result =
await prisma.interviewResult.findUnique({
where:{
id:req.params.id
}
});

if (!result) {
return res.status(404).json({
message:
"Result not found"
});
}

return res
.status(200)
.json(result);

} catch (error) {

console.log(error);

return res.status(500).json({
message:
"Server error"
});

}
};

export const completeInterview =
async (
req,
res
) => {

try {

const {
interviewId
} = req.body;

const interview =
await prisma.interview.findUnique({
where:{
id:interviewId
}
});

if (!interview) {
return res.status(404).json({
message:
"Interview not found"
});
}

const answers =
await prisma.interviewAnswer.findMany({
where:{
interviewId
}
});

console.log(
"\n===== RAW ANSWERS ====="
);

console.log(
answers
);

const questions =
Object.values(
interview.questions
).flat();

const answerTexts =
questions.map(
(question) => {

const match =
answers.find(
(item) =>
item.question === question
);

return (
match?.answer ||
""
);

}
);

console.log(
"\n===== QUESTION ↔ ANSWER ====="
);

questions.forEach(
(q,i)=>{

console.log(
`Q${i+1}:`,
q
);

console.log(
`A${i+1}:`,
answerTexts[i]
);

}
);

console.log(
"=========================="
);

const result =
await evaluateInterview(
questions,
answerTexts
);

if (
result.error
) {

return res.status(400).json({
message:
result.error
});

}

const savedResult =
await prisma.interviewResult.create({
data:{

interviewId,

score:
result.score ||
0,

feedback:
result

}
});

return res
.status(200)
.json(savedResult);

} catch (error) {

console.log(
"INTERVIEW RESULT ERROR:"
);

console.log(
error
);

return res.status(500).json({
message:
"Interview evaluation failed"
});

}
};