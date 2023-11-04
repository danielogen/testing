import ReturnHome from "../components/ReturnHome";

const About = () => {
  return (
    <div className="flex flex-col items-center py-6 h-screen w-screen">
      {/* Top of page: Navbar (see components/Navbar.jsx) */}
      {/* Middle of page: "About" content */}
      <h1 className="w-6/12 text-xl font-extrabold mb-4">
        What&apos;s this site&apos;s purpose?
      </h1>
      <p className="w-6/12 text-m mb-8">
        MyCourseEvaluation serves as a hub for students to discuss courses. As
        of now, student feedback and information for courses is fragmented
        across various sites and amongst course catalogs. Rather than browsing
        multiple websites, users can use this site to leave their opinions on
        classes they have taken and browse other user posts to find out about
        classes they plan to take.
      </p>
      <h1 className="w-6/12 text-xl font-extrabold mb-4">Can I contribute?</h1>
      <p className="w-6/12 text-m mb-8">
        Sure! By simply leaving reviews in good faith and requesting to add
        schools, you already contribute the site&apos;s main content.
      </p>
      <h1 className="w-6/12 text-xl font-extrabold mb-4">
        What&apos;s the motivation behind making this site?
      </h1>
      <p className="w-6/12 text-m mb-8">
        This site is a class project for a group of college seniors that saw an
        unfulfilled niche in the online student review experience. Thus,
        MyCourseEvaluation was born as an open source project!
      </p>

      {/* Bottom of page: Return home button*/}
      <ReturnHome />
    </div>
  );
};
export default About;