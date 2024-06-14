'use client';
import { Box, Container, Grid } from "@mui/material";
import { useFormik } from 'formik';
import Image from "next/image";
import { useState } from "react";
import bgImg from "../../../public/assets/images/bgImage.jpg";
import { cityData } from "../../../public/assets/static";
import ButtonComponent from "../Components/ButtonComponent/ButtonComponent";
import InputFieldComponent from "../Components/InputFieldComponent/InputFieldComponent";
import SelectFieldComponent from "../Components/SelectFieldComponent/SelectFieldComponent";
import Text from '../Components/Text/Text';
import { carDetailsSchema } from "../schema/CarDetailsSchema";

const Page = () => {
    const [numberOfImages, setNumberOfImages] = useState(0)
    const [images, setImages] = useState([])
    const formik = useFormik({
        initialValues: {
            carModel: "",
            carPrice: "",
            phone: "",
            numberOfImages: "",
            city: "",
        },
        validationSchema: carDetailsSchema,
        onSubmit: async (values) => {
            // open console for checking values
            console.log(values);
            setImages([])
            setNumberOfImages(0)
            formik.resetForm()
        },
    });
    // console.log("numberOfImages", numberOfImages)
    console.log("numberOfImages", formik.values)
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log(`Selected file: ${file.name}`);
            // Do something with the file
            setImages((prev) => [...prev, file])
        }
    };

    return (
        <Box sx={{
            backgroundImage: `url(${bgImg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            minHeight: "100vh",
            padding: "20px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Container maxWidth="md">
                <Box sx={{ background: "#fff", padding: "25px", borderRadius: "12px" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 4 }}>
                        <Text sx={{ fontSize: "22px", fontWeight: "600" }}>
                            Vehicle Information Form
                        </Text>
                    </Box>
                    <Grid container spacing={1}>
                        <Grid item lg={6} xs={12}>
                            <InputFieldComponent
                                value={formik.values.carModel}
                                onChange={(e) => formik.setFieldValue("carModel", e.target.value)}
                                formik={formik}
                                name="carModel"
                                sx={{ width: "100%", background: "#fff", border: "1px solid #fff" }}
                                required
                                type="text"
                                label="Car Model"
                            />
                            {formik.errors.carModel && (
                                <Text sx={{ fontSize: "12px" }} color="red">{formik.errors.carModel}</Text>
                            )}
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <InputFieldComponent
                                value={formik.values.carPrice}
                                onChange={(e) => formik.setFieldValue("carPrice", e.target.value)}
                                formik={formik}
                                name="carPrice"
                                sx={{ width: "100%", background: "#fff", border: "1px solid #fff" }}
                                required
                                type="text"
                                label="Car Price"
                            />
                            {formik.errors.carPrice && (
                                <Text sx={{ fontSize: "12px" }} color="red">{formik.errors.carPrice}</Text>
                            )}
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <InputFieldComponent
                                value={formik.values.phone}

                                onChange={(e) => formik.setFieldValue("phone", e.target.value)}
                                formik={formik}
                                name="phone"
                                sx={{ width: "100%", background: "#fff", border: "1px solid #fff" }}
                                required
                                type="phone"
                                label="Phone"
                            />
                            {formik.errors.phone && (
                                <Text sx={{ fontSize: "12px" }} color="red">{formik.errors.phone}</Text>
                            )}
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <SelectFieldComponent value={formik.values.city}
                                onChange={(e) => formik?.setFieldValue("city", e.target.value)} options={cityData} name="city" placeholder={"Please Select City"} required label={"City"} />
                            {formik.errors.city && (
                                <Text sx={{ fontSize: "12px" }} color="red">{formik.errors.city}</Text>
                            )}
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <SelectFieldComponent value={formik.values.numberOfImages} onChange={(e) => { setNumberOfImages(e.target.value); formik?.setFieldValue("numberOfImages", e.target.value) }} options={[...Array(10)]?.map((item, ind) => ({
                                label: ind + 1,
                                value: ind + 1,
                            }))} name="numberOfImages" required label={"Upload Number of Images"} />
                            {formik.errors.numberOfImages && (
                                <Text sx={{ fontSize: "12px" }} color="red">{formik.errors.numberOfImages}</Text>
                            )}
                        </Grid>
                        <Grid item lg={12} xs={12}>
                            {
                                [...Array(numberOfImages)].map((item, ind) => (
                                    <InputFieldComponent
                                        onChange={handleFileChange}
                                        key={ind}
                                        type="file"
                                        name={`numberOfImages-${ind}`}
                                        required
                                        label={`Upload Image ${ind + 1}`}
                                    />
                                ))
                            }
                        </Grid>
                        <Grid item lg={12} xs={12}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, my: 2 }}>
                                {
                                    images.map((item, ind) => (
                                        <Box key={ind} sx={{ position: 'relative', width: 100, height: 100 }}>
                                            <Image src={URL.createObjectURL(item)} alt={`Uploaded image ${ind + 1}`} layout="fill" objectFit="cover" />
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Grid>
                    </Grid>
                    <ButtonComponent
                        onClick={formik.handleSubmit}
                        text="Submit Details"
                        padding="12px 10px"
                        sx={{ width: "100%" }}
                        type="submit"
                    />
                </Box>
            </Container >
        </Box >
    )
}

export default Page;
