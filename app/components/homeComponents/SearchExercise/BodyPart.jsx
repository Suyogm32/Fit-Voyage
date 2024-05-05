import React from "react";
import { Stack, Typography } from "@mui/material";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const formattedItem = item.replace(/\s+/g, "%20");
  return (
    <Stack
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
<<<<<<< HEAD
      className="bodyPart-card bg-white rounded-xl p-4 gap-4"
      onClick={() => setBodyPart(item)}
    >
      <img src={`/gym/${formattedItem}.png`} alt={item} className="w-24 h-24 rounded-lg" />
      <Typography
        sx={{ fontSize: { xs: "10px", sm: "10px", md: "20px", lg: "25px" },textTransform:'capitalize' }}
=======
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "10px",
        width: { xs: "50px", sm: "100px", md: "170px", lg: "270px" },
        height: { xs: "50px", sm: "110px", md: "180px", lg: "280px" },
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => setBodyPart(item)}
    >
      <img src={`/gym/${formattedItem}.png`} alt={item} className="w-24 h-24" />
      <Typography
        sx={{ fontSize: { xs: "10px", sm: "10px", md: "20px", lg: "25px" } }}
>>>>>>> e84c902 (half project commit)
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
