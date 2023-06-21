import React, { useEffect, useState } from "react";
import styles from "../ProgressTracker.module.css";

export default function Tracker(props) {
  const { totalProjects, projectsCompleted } = props; // Destructuring the props
  const [trackerArray, setTrackerArray] = useState([]); // Setting the state of the trackerArray

  useEffect(() => {
    const completedArray = projectsCompleted.split(","); // Splitting the string of completed projects into an array
    const trackerObjects = Array.from(
      { length: totalProjects },
      (_, index) => ({
        // Creating an array of objects to map over reading off the COUNT of total projects
        num: index + 1, // The number of the tracker
        active: false, // The active state of the tracker
      })
    );
    for (let i = 0; i < completedArray.length; i++) {
      // Looping over the completed array
      const completedIndex = parseInt(completedArray[i]) - 1; // Subtracting 1 from the completed index to match the trackerObjects array
      if (completedIndex >= 0 && completedIndex < totalProjects) {
        // Checking to make sure the completed index is within the bounds of the trackerObjects array
        trackerObjects[completedIndex].active = true; // Setting the active state of the tracker to true
      }
    }
    setTrackerArray(trackerObjects); // Setting the state of the trackerArray to the trackerObjects array
  }, [totalProjects, projectsCompleted]); // Adding the totalProjects and projectsCompleted as dependencies

  return (
    <div className={styles.projectsCompleted}>
      {/* Mapping over the trackerArray and rendering the buttons */}
      {trackerArray.map((tracker) => (
        <button
          key={tracker.num} // Using the number of the tracker as the key
          className={
            // Using a ternary to set the class of the button
            tracker.active // If the tracker is active, add the activeTracker class
              ? `${styles.tracker} ${styles.activeTracker}` // If the tracker is not active, add the tracker class
              : styles.tracker // Using a ternary to set the color of the button
          }
        >
          {tracker.num}
        </button>
      ))}
    </div>
  );
}
