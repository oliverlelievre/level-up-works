import React, { useContext } from 'react';
import { Route, Routes, } from "react-router-dom";

import { AuthContext } from '../contexts/AuthContext';

import NoMatch from "../views/NoMatch";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import ProgressTracker from "../components/Teachers/TeacherDashboard/ProgressTracker/ProgressTracker";
import StudentProfiles from '../components/Teachers/TeacherDashboard/StudentProfiles/StudentProfiles';
import HelpRequests from '../components/Teachers/TeacherDashboard/HelpRequests/HelpRequests';

import ProjectsLibrary from '../views/ProjectsLibrary';

import TeacherProfile from '../components/Teachers/TeacherProfile/TeacherProfile';
import StudentProfile from '../components/Students/StudentProfile/StudentProfile';

import LearningObjectives from '../components/Students/StudentDashboard/LearningObjectives/LearningObjectives';
import Instructions from '../components/Students/StudentDashboard/Instructions/Instructions';
import VideoTutorial from '../components/Students/StudentDashboard/VideoTutorial/VideoTutorial';
import MakeProject from '../components/Students/StudentDashboard/MakeProject/MakeProject';
import SubmitProject from '../components/Students/StudentDashboard/SubmitProject/SubmitProject';
import TeacherLearningDashboard from '../views/Dashboard/TeacherLearningDashboard';

import LearningObjectivesT from '../components/Teachers/LearningDashboard/LearningObjectives/LearningObjectivesT';
import InstructionsT from '../components/Teachers/LearningDashboard/Instructions/InstructionsT';


const RouterLinks = () => {

	const { role } = useContext(AuthContext);

	return (
		<Routes>
			<Route path="/" element={<Home
			/>} />
			<Route path="/home" element={<Home />} />

			{role === 'teacher' && (
				<Route path="/dashboard" element={<Dashboard />} >
					<Route index element={<Dashboard />} />
					<Route path="teacher/progress-tracker" element={<ProgressTracker />} />
					<Route path="teacher/student-profiles" element={<StudentProfiles />} />
					<Route path="teacher/help-requests" element={<HelpRequests />} />
					<Route path="teacher/project-submissions" element={<ProgressTracker />} />

					<Route path="/dashboard/teacher-learning" element={<TeacherLearningDashboard />} >
						<Route index element={<TeacherLearningDashboard />} />
						<Route path="learning-objectives" element={<LearningObjectivesT />} />
						<Route path="instructions" element={<InstructionsT />} />
					</Route>
				</Route>

			)}
			{role === 'teacher' && (
				<Route path="/teacher/profile/:teacher_id" element={<TeacherProfile />} />
			)}

			{(role === 'teacher' || role === 'student') && (
				<>
					<Route path="/projects/projects-library" element={<ProjectsLibrary />} />
					<Route path="/student/profile/:student_id" element={<StudentProfile />} />
				</>
			)}

			{role === 'student' && (
				<Route path="/dashboard" element={<Dashboard />} >
					<Route path="student/learning-objectives" element={<LearningObjectives />} />
					<Route path="student/instructions" element={<Instructions />} />
					<Route path="student/video-tutorial" element={<VideoTutorial />} />
					<Route path="student/make-project" element={<MakeProject />} />
					<Route path="student/submit-project" element={<SubmitProject />} />
				</Route>

			)}
			<Route path="*" element={<NoMatch
			/>} />

		</Routes>
	);
};

export default RouterLinks;