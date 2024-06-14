import { Button } from "@mui/material"

const ButtonComponent = ({
    text = "click here",
    background = "#4B40DB",
    color = "#fff",
    padding = "6px 10px",
    onClick,
    sx
}) => {
    return (
        <Button onClick={onClick} sx={{
            background: background, padding: padding, color: color,
            "&:hover": {
                background: background
            },
            ...sx
        }}>
            {text}
        </Button>
    )
}

export default ButtonComponent
