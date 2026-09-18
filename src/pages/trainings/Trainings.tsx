import BehindTheScene from "./sections/BehindTheScene";
import ClientFeedback from "./sections/ClientFeedback";
import CourseProcess from "./sections/CourseProcess";
import ExampleCourses from "./sections/ExampleCourses";
import Hero from "./sections/Hero";

export default function Trainings() {
  return (
    <main className="pt-app-padding-top">
      <Hero />
      <CourseProcess />
      <ExampleCourses />
      <BehindTheScene />
      <ClientFeedback />
    </main>
  );
}
