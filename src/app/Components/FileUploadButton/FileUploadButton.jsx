import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function FileUpload({
    onChange,
    buttonText = "Upload file",
    icon = <CloudUploadIcon />,
    background = "#4B40DB",
    color = "#fff",
    padding = "6px 10px",
    sx
}) {
    return (
        <Button sx={{
            background: background, padding: padding, color: color,
            "&:hover": {
                background: background
            },
            ...sx
        }}
            component="label"
            variant="contained"
            tabIndex={-1}
            startIcon={icon}
        >
            {buttonText}
            <VisuallyHiddenInput type="file" onChange={onChange} />
        </Button>
    );
}


export default FileUpload;
