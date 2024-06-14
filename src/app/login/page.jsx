'use client';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Container } from "@mui/material";
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import bgImg from "../../../public/assets/images/bgImage.jpg";
import ButtonComponent from "../Components/ButtonComponent/ButtonComponent";
import InputFieldComponent from "../Components/InputFieldComponent/InputFieldComponent";
import Text from '../Components/Text/Text';
import { loginSchema } from '../schema/LoginSchema';

const LoginPage = () => {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            console.log(values);
            router.push('/CarDetailsPage');
        },
    });
    // open console for checking values
    console.log(formik.values);
    return (
        <Box sx={{
            backgroundImage: `url(${bgImg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Container maxWidth="xs">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 4 }}>
                    <AccountCircleIcon sx={{ color: "#4B40DB", fontSize: 120, border: "1px solid #fff", borderRadius: "50%", padding: 2 }} />
                </Box>
                <Box sx={{ background: "#fff", padding: "25px", borderRadius: "12px" }}>
                    <InputFieldComponent
                        onChange={(e) => formik.setFieldValue("email", e.target.value)}
                        formik={formik}
                        value={formik.values.email}
                        name="email"
                        sx={{ width: "100%", background: "#fff", border: "1px solid #fff" }}
                        required
                        type="email"
                        label="Email"
                    />
                    {formik.errors.email && (
                        <Text sx={{ fontSize: "12px" }} color="red">{formik.errors.email}</Text>
                    )}
                    <InputFieldComponent
                        onChange={(e) => formik.setFieldValue("password", e.target.value)}
                        formik={formik}
                        value={formik.values.password} name="password"
                        sx={{ width: "100%", background: "#fff", border: "1px solid #fff" }}
                        required
                        type="password"
                        label="Password"
                    />
                    {formik.errors.password && (
                        <Text sx={{ fontSize: "12px" }} color="red">{formik.errors.password}</Text>
                    )}
                    <ButtonComponent
                        onClick={formik.handleSubmit}
                        text="Login"
                        padding="12px 10px"
                        sx={{ my: 2, width: "100%" }}
                        type="submit"
                    />
                </Box>
            </Container >
        </Box >
    )
}

export default LoginPage;
