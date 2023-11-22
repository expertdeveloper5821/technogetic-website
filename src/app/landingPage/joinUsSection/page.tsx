import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import CommonButton from "@/components/buttonComponent/page";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
interface FormValues {
  name: string;
  email: string;
  messages: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  messages: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  messages: Yup.string().required("Message is required"),
});

const JoinUs = () => {
  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    // try {
    //   const response = await axios.post(
    //     'https://technogetic.com/wp-json/contact-form-7/v1/contact-forms/10881/feedback',
    //     values
    //   );
  
    //   // Handle successful response
    //   console.log('API response:', response.data);
  
    //   // Reset the form
    //   resetForm();
    // } catch (error) {
    //   // Handle error
    //   console.error('API error:', error);
    // }
    try {
      // setIsLoading(true)
      const formData = new FormData()
      formData.append('your-name', values.name)
      formData.append('your-email', values.email)
      formData.append('your-message', values.messages)
      formData.append('your-subject', 'Contact us')
      const response:any = await fetch('https://technogetic.com/wp-json/contact-form-7/v1/contact-forms/10881/feedback', {
          method: 'POST',
          body: formData,
      })
      if (response.status === 200) {
        console.log('API response:', response.data);
          resetForm()
          // setIsLoading(false)
          // toast.success(response.message)
      } else {
          // setIsLoading(false)
          throw new Error(response)
      }
  } catch (error) {
      console.log('Error submitting form:', error)
      // setIsLoading(false)
      // toast.error('Mail not sent, Please try again later!')
  }
  };

  return (
    <div id="contact">
      <div className={styles["about-us"]}>
        <div className={styles["about"]}>
          <div className={styles["about-img"]}>
            <div className={styles["img-one"]}>
              <Image
                src="/assets/joinus/j1.jpg"
                alt="about us "
                width={0}
                height={0}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={styles["img-two"]}>
              <Image
                src="/assets/joinus/j2.jpg"
                alt="about us "
                width={0}
                height={0}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles["about-content"]}>
            <div className={styles["demo"]}>
              <h6>Join Us</h6>
              <h2>Several Things Define Us As a Company</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className={styles["main-form"]}>
                  <div className={styles["form"]}>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className={styles["input"]}
                    />
                    <ErrorMessage name="name" component="div" className={styles["error"]} />

                    <Field
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className={styles["input"]}
                    />
                    <ErrorMessage name="email" component="div" className={styles["error"]} />
                  </div>
                  <div className={styles["textarea"]}>
                    <Field
                      as="textarea"
                      name="messages"
                      placeholder="Messages"
                      className={styles["messages"]}
                    />
                    <ErrorMessage name="messages" component="div" className={styles["error"]} />
                  </div>

                  <div className={styles["header-btn"]}>
                    <CommonButton
                      text="Send Message"
                      type="submit"
                      className={styles["custom-btn"]}
                    />
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
