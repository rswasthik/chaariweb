import { Button, ThemeProvider, createTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { FaFileUpload } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import MenuItem from "@mui/material/MenuItem";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar2 from "@/components/NavBar";
import ParticleBackground from "../components/particleBackground";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app, database, storage } from "@/firebaseConfig";
export default function Upload() {
  //theme for mui
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#e6e6e6",
        contrastText: "#fff",
      },
    },
  });

  const [traininglevel, settraininglevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [trainingLevel, setTrainingLevel] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const handleTrainingLevelChange = (event) => {
    setTrainingLevel(event.target.value);
  };
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const trainingLevelOptions = [
    "PHYSICAL Wellbeing Beginner",
    "PHYSICAL Wellbeing Intermediate",
    "PHYSICAL Wellbeing Advance",
    "MENTAL Wellbeing",
    "WOMEN Self care",
  ];
  const PHYSICALBeginnerOptions = [
    "Warm ups – Prāramba Vyāyamā",
    "Strengthening ",
    "Balance",
    "Stretches",
    "Dancercise",
    "Meditation/Breathing",
    "Cool Down exercises",
  ];
  const PHYSICALIntermediateOptions = [
    "Warm ups – Prāramba Vyāyamā",
    "  Strengthening ",
    "Balance",
    "Stretches",
    "Dancercise",
    "Meditation/Breathing",
    "Cool Down exercises",
  ];
  const PHYSICALAdvanceOptions = [
    "Warm ups – Prāramba Vyāyamā",
    "  Strengthening ",
    "Balance",
    "Stretches",
    "Dancercise",
    "Meditation/Breathing",
    "Cool Down exercises",
  ];
  const MentalWellbeingOptions = [
    " Stress management",
    "Anxiety control",
    "Depression handling",
  ];

  const WomenselfcareOptions = [
    " Uterus care",
    "Menstrual cycle management",
    "Menopause handling",
  ];
  const getCoursesForTrainingLevel = (level) => {
    switch (level) {
      case "PHYSICAL Wellbeing Beginner":
        return PHYSICALBeginnerOptions;
      case "PHYSICAL Wellbeing Intermediate":
        return PHYSICALIntermediateOptions;
      case "PHYSICAL Wellbeing Advance":
        return PHYSICALAdvanceOptions;
      case "MENTAL Wellbeing":
        return MentalWellbeingOptions;
      case "WOMEN Self care":
        return WomenselfcareOptions;
      default:
        return [];
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "video/mp4") {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setLoading(true);

      const storageRef = ref(storage, `videos/${selectedFile.name}`);
      uploadBytes(storageRef, selectedFile)
        .then(() => {
          getDownloadURL(storageRef)
            .then((downloadURL) => {
              database
                .collection("videos")
                .add({
                  trainingLevel: trainingLevel,
                  course: selectedCourse,
                  downloadURL: downloadURL,
                })
                .then(() => {
                  setLoading(false);
                })
                .catch((error) => {
                  console.error("Error storing video data:", error);
                  setLoading(false);
                });
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setLoading(false);
        });
      console.log(storageRef);
      console.log(trainingLevel);
    }
  };
  return (
    <>
      <Head>
        <title>Chaari</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar2 />
      <main>
        <ParticleBackground />
        <div className="h-auto  flex flex-col justify-center items-center py-8 ">
          <div
            style={{ zIndex: "1" }}
            className="  px-12 py-10 w-11/12 sm:w-10/12 md:w-4/5 lg:w-4/5 xl:w-1/2 glass-morphic border-2 border-black rounded-md flex flex-col box-border"
          >
            <div className="text-5xl text-white text-center">Upload Videos</div>

            <div className="flex flex-col  ">
              <ThemeProvider theme={theme}>
                <div className="flex flex-col mt-10 mb-4">
                  <div className="flex flex-col mb-4">
                    <TextField
                      id="training-level-select"
                      select
                      value={trainingLevel}
                      onChange={handleTrainingLevelChange}
                      label="Select training level"
                      variant="outlined"
                    >
                      {trainingLevelOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>

                <div className="flex flex-col mt-4 mb-4">
                  <div className="flex flex-col mb-4">
                    <TextField
                      id="course-select"
                      select
                      value={selectedCourse}
                      onChange={handleCourseChange}
                      label="Select course"
                      variant="outlined"
                      disabled={!trainingLevel} // Disable the course selection until a training level is chosen
                    >
                      {getCoursesForTrainingLevel(trainingLevel).map(
                        (option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                  </div>
                </div>
                <div className="flex flex-row gap-6 flex-wrap justify-center">
                  <div className="flex flex-col mb-10">
                    <label
                      htmlFor="filePicker"
                      className="block font-medium mb-2"
                    >
                      <Button
                        component="span"
                        variant="outlined"
                        sx={{
                          p: "12px",
                          minWidth: 320,
                          textTransform: "capitalize",
                          color: "rgba(255, 255, 255, 0.7)",
                          fontWeight: "400",
                          fontSize: "1rem",
                        }}
                      >
                        {selectedFile ? selectedFile.name : "Select Video"}
                        <FaFileUpload
                          fontSize="1.45em"
                          style={{
                            marginLeft: "auto",
                            color: "rgba(255, 255, 255, 1)",
                          }}
                        />
                      </Button>
                    </label>
                    <input
                      type="file"
                      id="filePicker"
                      style={{ display: "none" }}
                      accept="video/mp4"
                      className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      onChange={handleFileSelect}
                    />
                    {selectedFile && (
                      <Button
                        variant="contained"
                        disabled={loading}
                        onClick={handleUpload}
                        sx={{ mt: 2 }}
                      >
                        {loading ? "Uploading..." : "Upload"}
                      </Button>
                    )}
                  </div>
                </div>
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "1.2rem",
                    padding: "10px 0",
                    maxwidth: 240,
                  }}
                  endIcon={<MdSend />}
                >
                  Submit
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
