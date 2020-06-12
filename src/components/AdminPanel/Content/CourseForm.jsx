import React from "react";
import { Formik } from "formik";
import {
  Form, Col, InputGroup, Button
} from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object({
  courseTitle: yup.string().required(),
  courseCategory: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  file: yup.string().required(),
  terms: yup.bool().required()
});

const AddCourse = () => (
    <Formik
      validationSchema={schema}
      initialValues={{
        CourseTitle: "Default",
        courseCategory: "Physics"
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik101">
              <Form.Label>Course Title</Form.Label>
              <Form.Control
                type="text"
                name="courseTitle"
                value={values.courseTitle}
                onChange={handleChange}
                isValid={touched.courseTitle && !errors.courseTitle}
              />
              <Form.Control.Feedback tooltip="true">Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik102">
              <Form.Label>Course Category</Form.Label>
              <Form.Control
                type="text"
                name="courseCategory"
                value={values.courseCategory}
                onChange={handleChange}
                isValid={touched.courseCategory && !errors.courseCategory}
              />

              <Form.Control.Feedback tooltip="true">Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>Duration</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Duration"
                  aria-describedby="inputGroupPrepend"
                  name="Duration"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.Duration}
                />
                <Form.Control.Feedback type="invalid" tooltip="true">
                  {errors.Duration}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik103">
              <Form.Label>Organization</Form.Label>
              <Form.Control
                type="text"
                placeholder="Organization"
                name="Organization"
                value={values.Organization}
                onChange={handleChange}
                isInvalid={!!errors.Organization}
              />

              <Form.Control.Feedback type="invalid" tooltip="true">
                {errors.Organization}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik104">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="state"
                value={values.Description}
                onChange={handleChange}
                isInvalid={!!errors.Description}
              />
              <Form.Control.Feedback type="invalid" tooltip="true">
                {errors.Description}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Add Course</Button>
        </Form>
      )}
    </Formik>
);

export default AddCourse;
