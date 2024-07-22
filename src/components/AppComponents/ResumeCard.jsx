import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import "./styles/resumeCard.css"

export default function ResumeCard({ type, data }) {
  return (
    <Card className="cardContainer" sx={{ maxWidth: 1000 }}>
      <CardContent>
        {type === "Education" ? (
          <Stack>
            <Box>
              <Typography variant="subtitle1" component="div">
                {data.courseName}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                {data.university}
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle2" component="div">
                {data.startDate} - {data.endDate}
              </Typography>
            </Box>
          </Stack>
        ) : (
          <Stack>
            <Box>
              <Typography variant="subtitle1" component="div">
                {data.jobTitle}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="div">
                {data.companyName}
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle2" component="div">
                {data.startDate} - {data.endDate}
              </Typography>
            </Box>
            <Box variant="body2" color="text.secondary">
              <ul>
                {data.keyAchievements.map((achieve) => (
                  <li key={achieve.achieveID}>{achieve.achieveDescr}</li>
                ))}
              </ul>
            </Box>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}

ResumeCard.propTypes = {
  type: PropTypes.oneOf(["Education", "Experience"]).isRequired,
  data: PropTypes.shape({
    courseID: PropTypes.number,
    courseName: PropTypes.string,
    university: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    jobId: PropTypes.number,
    jobTitle: PropTypes.string,
    companyName: PropTypes.string,
    keyAchievements: PropTypes.arrayOf(
      PropTypes.shape({
        achieveID: PropTypes.number,
        achieveDescr: PropTypes.string,
      })
    ),
  }).isRequired,
};
