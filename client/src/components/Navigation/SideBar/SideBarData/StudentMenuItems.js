import React from 'react';

import learningObjectives from "../../../../assets/StudentDashboard/learningObjectives.png";
import learningObjectivesSelected from "../../../../assets/StudentDashboard/learningObjectivesSelected.png";
import instructions from "../../../../assets/StudentDashboard/instructions.png";

import instructionsSelected from "../../../../assets/StudentDashboard/instructionsSelected.png";
import video from "../../../../assets/StudentDashboard/video.png";
import videoSelected from "../../../../assets/StudentDashboard/videoSelected.png";
import makeProject from "../../../../assets/StudentDashboard/makeProject.png";
import makeProjectSelected from "../../../../assets/StudentDashboard/makeProjectSelected.png";
import submitProject from "../../../../assets/StudentDashboard/submitProject.png";
import submitProjectSelected from "../../../../assets/StudentDashboard/submitProjectSelected.png";
import bonusChallenge from "../../../../assets/StudentDashboard/bonusChallenge.png";
import takeTheQuiz from "../../../../assets/StudentDashboard/takeTheQuiz.png";

const studentSBMenuLinks = [
	{
		id: "learning-objectives",
		title: 'Learning Objectives',
		imgSrc: learningObjectives,
		imgSrcSelected: learningObjectivesSelected,
		path: '/dashboard/student/learning-objectives',
	},
	{
		id: "instructions",
		title: 'Instructions',
		imgSrc: instructions,
		imgSrcSelected: instructionsSelected,
		path: '/dashboard/student/instructions',
	}, {
		id: "video",
		title: 'Video Tutorial',
		imgSrc: video,
		imgSrcSelected: videoSelected,
		path: '/dashboard/student/video-tutorial',
	}, {
		id: "make-project",
		title: 'Make Project',
		imgSrc: makeProject,
		imgSrcSelected: makeProjectSelected,
		path: '/dashboard/student/make-project',
	}, {
		id: "submit-project",
		title: 'Submit Project',
		imgSrc: submitProject,
		imgSrcSelected: submitProjectSelected,
		path: '/dashboard/student/submit-project',
	}, {
		id: "bonus-challenge",
		title: 'Bonus Challenge',
		imgSrc: bonusChallenge,
		imgSrcSelected: bonusChallenge,
		path: '/dashboard/student/bonus-challenge',


	}, {
		id: "take-the-quiz",
		title: 'Take the Quiz',
		imgSrc: takeTheQuiz,
		imgSrcSelected: takeTheQuiz,
		path: '/dashboard/student/take-the-quiz',

	},
];

export { studentSBMenuLinks };