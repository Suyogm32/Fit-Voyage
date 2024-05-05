import React from "react";
import { Stack, Typography } from "@mui/material";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const formattedItem = item.replace(/\s+/g, "%20");
  return (
    <Stack
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
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
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
