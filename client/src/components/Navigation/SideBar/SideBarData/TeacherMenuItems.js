import React from 'react';

import progressTracker from "../../../../assets/TeacherDashboard/progressTracker.png";
import progressTrackerSelected from "../../../../assets/TeacherDashboard/progressTrackerSelected.png";
import studentProfiles from "../../../../assets/TeacherDashboard/studentProfiles.png";
import studentProfilesSelected from "../../../../assets/TeacherDashboard/studentProfilesSelected.png";
import helpRequests from "../../../../assets/TeacherDashboard/helpRequests.png";
import helpRequestsSelected from "../../../../assets/TeacherDashboard/helpRequestsSelected.png";
import projectSubmissions from "../../../../assets/TeacherDashboard/projectSubmissions.png";
import projectSubmissionsSelected from "../../../../assets/TeacherDashboard/projectSubmissionsSelected.png";
import projectLibrary from "../../../../assets/TeacherDashboard/projectLibrary.png";
import projectLibrarySelected from "../../../../assets/TeacherDashboard/projectLibrarySelected.png";

import learningObjectives from "../../../../assets/StudentDashboard/learningObjectives.png";
import learningObjectivesSelected from "../../../../assets/StudentDashboard/learningObjectivesSelected.png";
import instructions from "../../../../assets/StudentDashboard/instructions.png";

import instructionsSelected from "../../../../assets/StudentDashboard/instructionsSelected.png";
import video from "../../../../assets/StudentDashboard/video.png";
import videoSelected from "../../../../assets/StudentDashboard/videoSelected.png";
import previewProject from "../../../../assets/StudentDashboard/makeProject.png";
import previewProjectSelected from "../../../../assets/StudentDashboard/makeProjectSelected.png";
import checkSubmissions from "../../../../assets/StudentDashboard/submitProject.png";
import checkSubmissionsSelected from "../../../../assets/StudentDashboard/submitProjectSelected.png";
import offlineActivities from "../../../../assets/StudentDashboard/bonusChallenge.png";
import viewQuizResults from "../../../../assets/StudentDashboard/takeTheQuiz.png";

const teacherSBMenuLinks = [
	{
		id: "progress-tracker",
		title: 'Progress Tracker',
		imgSrc: progressTracker,
		imgSrcSelected: progressTrackerSelected,
		path: '/dashboard/teacher/progress-tracker',
	},
	{
		id: "student-profiles",
		title: 'Student Profiles',
		imgSrc: studentProfiles,
		imgSrcSelected: studentProfilesSelected,
		path: '/dashboard/teacher/student-profiles',
	}, {
		id: "help-requests",
		title: 'Help Requests',
		imgSrc: helpRequests,
		imgSrcSelected: helpRequestsSelected,
		path: '/dashboard/teacher/help-requests',
	}, {
		id: "project-submissions",
		title: 'Project Submissions',
		imgSrc: projectSubmissions,
		imgSrcSelected: projectSubmissionsSelected,
		path: '/dashboard/teacher/project-submissions',
	}, {
		id: "project-library",
		title: 'Project Library',
		imgSrc: projectLibrary,
		imgSrcSelected: projectLibrarySelected,
		path: '/projects/projects-library',
	},
];

const teacherSBLearnMenuLinks = [
	{
		id: "learning-objectives",
		title: 'Learning Objectives',
		imgSrc: learningObjectives,
		imgSrcSelected: learningObjectivesSelected,
		path: '/dashboard/teacher-learning/learning-objectives',
	},
	{
		id: "instructions",
		title: 'Instructions',
		imgSrc: instructions,
		imgSrcSelected: instructionsSelected,
		path: '/dashboard/teacher-learning/instructions',
	}, {
		id: "video",
		title: 'Video Tutorial',
		imgSrc: video,
		imgSrcSelected: videoSelected,
		path: '/dashboard/teacher-learning/video-tutorial',
	}, {
		id: "preview-project",
		title: 'Preview Project',
		imgSrc: previewProject,
		imgSrcSelected: previewProjectSelected,
		path: '/dashboard/teacher-learning/preview-project',
	}, {
		id: "check-submissions",
		title: 'Check Submissions',
		imgSrc: checkSubmissions,
		imgSrcSelected: checkSubmissionsSelected,
		path: '/dashboard/teacher-learning/check-submissions',
	}, {
		id: "offline-activites",
		title: 'Offline Activities',
		imgSrc: offlineActivities,
		imgSrcSelected: offlineActivities,
		path: '/dashboard/teacher-learning/offline-activites',


	},
	{
		id: "view-quiz-results",
		title: 'View Quiz Results',
		imgSrc: viewQuizResults,
		imgSrcSelected: viewQuizResults,
		path: '/dashboard/teacher-learning/view-quiz-results',

	},
];

export { teacherSBMenuLinks, teacherSBLearnMenuLinks };