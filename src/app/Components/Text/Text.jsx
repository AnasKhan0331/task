import { Typography } from "@mui/material";

const Text = ({
    children,
    variant = "h2",
    color = "#000",
    my = 2,
    sx
}) => {
    return (
        <Typography
            variant={variant}
            sx={{ color: color, ...sx }}
            my={my}
        >
            {children}
        </Typography>
    );
};

export default Text;
