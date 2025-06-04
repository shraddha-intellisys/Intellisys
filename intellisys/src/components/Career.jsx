import { useState} from "react";
import "./Career.css";

const Career = () => {
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [showJobPopup, setShowJobPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [formData, setFormData] = useState({
    position: "",
    name: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postalcode: "",
    contact: "",
    email: "",
    cv: null,
  });
  const [searchJobRole, setSearchJobRole] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const jobDetails = {
    "Java Developer": {
      description: `We are looking for a Java Developer with 1-2 years of experience. The ideal candidate should have proficient analytical & problem-solving skills and a strong understanding of OOP concepts & UI design principles. Experience in Firebase implementation is mandatory.`,
      responsibilities: `- Develop mobile applications using Java or later versions.
                       - Deploy apps to Android & iOS App Store.
                       - Design app UI using HTML5, CSS3, SCSS.
                       - Implement Ionic / Cordova plugins for functionalities like Geo-location, QR Code, Camera, SMS auto-read.
                       - Integrate third-party APIs such as RazorPay, ccAvenue.`,
      requirements: `- 1-2 years of experience in Java development.
                     - Bachelor's degree (Preferred).`,
    },
    "Digital Marketing": {
      description: `We are seeking a Digital Marketing specialist with 0-1 year of experience. The ideal candidate should be familiar with SEO, SEM, and social media platforms. Responsibilities include developing marketing strategies and managing online campaigns.`,
      responsibilities: `- Develop and execute digital marketing strategies.
                         - Manage online advertising campaigns.
                         - Work on SEO, SEM, and Social Media platforms to drive traffic.
                         - Analyze web traffic and provide marketing insights.`,
      requirements: `- 0-1 year of experience in Digital Marketing.
                     - Bachelor's degree in Marketing or a related field (Preferred).`,
    },
    "Graphic Design": {
      description: `We are looking for a Graphic Designer with 0-1 year of experience. The candidate should have expertise in Adobe Creative Suite, including Photoshop and Illustrator, and should be capable of creating engaging visuals for digital platforms.`,
      responsibilities: `- Create and design digital assets for websites, social media, and advertisements.
                         - Work closely with the marketing team to ensure designs meet requirements.
                         - Maintain brand consistency across designs.`,
      requirements: `- 0-1 year of experience in Graphic Design.
                     - Proficiency in Adobe Photoshop, Illustrator, and other graphic design software.
                     - Portfolio showcasing previous work (Preferred).`,
    },
    HR: {
      description: `We are looking for a female HR candidate with 0-1 year of experience. The role involves recruitment, employee management, and improving workplace culture. Strong interpersonal and communication skills are required.`,
      responsibilities: `- Assist in recruitment processes.
                         - Manage employee relations and resolve conflicts.
                         - Conduct performance reviews and foster employee engagement.`,
      requirements: `- Female candidates only.
                     - 0-1 year of experience in HR.
                     - Bachelor's degree in Human Resources or related field (Preferred).`,
    },
    "Full Stack Trainer": {
      description: `We are looking for a Full Stack Trainer with 1-3 years of experience. The ideal candidate should have strong knowledge of both front-end and back-end technologies, with a passion for teaching and mentoring.`,
      responsibilities: `- Deliver engaging and interactive training sessions on full-stack development.
                        - Teach front-end technologies like HTML, CSS, JavaScript, and modern JavaScript frameworks.
                        - Train students on back-end technologies like Node.js, Express.js, Python, Ruby, or Java.
                        - Provide hands-on guidance for building projects and practical coding exercises.`,
      requirements: `- 1-3 years of experience in full-stack development.
                    - Strong proficiency in front-end and back-end technologies.
                    - Familiarity with database management systems.
                    - Strong communication skills and the ability to explain technical concepts.`,
    },
    "Automation Tester": {
      description: `We are looking for an Automation Tester with 0-1 year of experience. The ideal candidate should have a strong understanding of software testing principles, including automated testing frameworks and tools.`,
      responsibilities: `- Develop and execute automated tests for web and mobile applications.
                        - Collaborate with developers and QA teams to design effective test strategies.
                        - Identify, record, and track defects found during testing.
                        - Analyze test results and generate detailed reports for stakeholders.`,
      requirements: `- 0-1 year of experience in automation testing.
                    - Familiarity with automation tools such as Selenium, TestNG, JUnit, or similar.
                    - Basic knowledge of programming languages like Java, Python, or JavaScript.`,
    },
    "Big Data Analytics": {
      description: `We are looking for a Big Data Analytics professional with 0-1 year of experience. The ideal candidate should have a passion for data analysis, with a strong understanding of big data technologies and data processing.`,
      responsibilities: `- Analyze large datasets to identify trends, patterns, and insights.
                        - Work with big data tools such as Hadoop, Spark, and Hive to process and analyze data.
                        - Develop data models, reports, and dashboards to visualize findings.`,
      requirements: `- 0-1 year of experience in Big Data Analytics or related field.
                    - Familiarity with big data technologies such as Hadoop, Spark, and Hive.
                    - Basic knowledge of programming languages like Python, Java, or Scala.`,
    },
  };

  const jobs = [
    {
      title: "Java Developer",
      experience: "1-2 years",
      location: "Pune",
      posts: 10,
      postingDate: "20-01-2025",
    },
    {
      title: "Digital Marketing",
      experience: "0-1 years",
      location: "Pune",
      posts: 10,
      postingDate: "20-01-2025",
    },
    {
      title: "Graphic Design",
      experience: "0-1 years",
      location: "Pune",
      posts: 3,
      postingDate: "17-01-2025",
    },
    {
      title: "HR",
      experience: "0-1 years",
      location: "Pune",
      posts: 3,
      postingDate: "17-01-2025",
    },
    {
      title: "Full Stack Trainer",
      experience: "1-3 years",
      location: "Pune",
      posts: 5,
      postingDate: "17-01-2025",
    },
    {
      title: "Automation Tester",
      experience: "0-1 years",
      location: "Pune",
      posts: 3,
      postingDate: "17-01-2025",
    },
    {
      title: "Big Data Analytics",
      experience: "0-1 years",
      location: "Pune",
      posts: 3,
      postingDate: "17-01-2025",
    },
  ];

  const scrollToOpenPositions = () => {
    document.getElementById("positions").scrollIntoView({
      behavior: "smooth",
    });
  };

  const openPopup = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    setShowJobPopup(true);
  };

  const closePopup = () => {
    setShowJobPopup(false);
  };

  const openFormPopup = () => {
    setShowJobPopup(false);
    setFormData((prev) => ({ ...prev, position: selectedJobTitle }));
    setShowFormPopup(true);
  };

  const closeFormPopup = () => {
    setShowFormPopup(false);
    setFormData({
      position: "",
      name: "",
      address: "",
      country: "",
      state: "",
      city: "",
      postalcode: "",
      contact: "",
      email: "",
      cv: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, cv: e.target.files[0] }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Regex validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const phoneRegex = /^\d{10}$/;
    const postalCodeRegex = /^\d{6}$/;

    // Basic field validations
    if (!formData.position.trim()) {
      alert("Job Position is required.");
      return;
    }
    if (!nameRegex.test(formData.name)) {
      alert("Invalid name format.");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      alert("Invalid email format.");
      return;
    }
    if (!phoneRegex.test(formData.contact)) {
      alert("Invalid phone number.");
      return;
    }
    if (!postalCodeRegex.test(formData.postalcode)) {
      alert("Invalid pin code.");
      return;
    }

    // Prepare FormData
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    // Submit form
    try {
      const response = await fetch("http://localhost:5000/api/career", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message || "✅ Application submitted successfully!");
        closeFormPopup(); 
      } else {
        alert(result.message || "⚠️ Something went wrong during submission.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("❌ Failed to submit. Please try again later.");
    }
  };

  const clearFields = () => {
    setSearchJobRole("");
    setSearchLocation("");
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesRole = job.title
      .toLowerCase()
      .includes(searchJobRole.toLowerCase());
    const matchesLocation = job.location
      .toLowerCase()
      .includes(searchLocation.toLowerCase());
    return matchesRole && matchesLocation;
  });

  return (
    <div className="career-page">
      {/* Career Section */}
      <section className="career-section bg-[rgb(216,196,186)] py-20">
        <div className="containercareer mx-auto text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            Career at <span className="text-orange-500">Intellisys</span>
          </h1>
          <p className="text-lg text-black mb-8">
            Check out our open positions or sign up to our newsletter to get
            notified about opportunities to join the Intellisys team.
          </p>
          <div id="open-positions">
            <button
              className="bg-[#FC7F03] text-white px-8 py-3 rounded-full"
              onClick={scrollToOpenPositions}
            >
              All Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Hiring Models */}
      <div className="containerhiring mx-auto px-4 py-12">
        <h1 className="main-heading text-3xl font-bold text-center mb-8">
          Hiring Models
        </h1>
        <div className="cards-container grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="card-heading text-xl font-bold mb-3">
              Singular Assets
            </h2>
            <p className="card-description text-gray-600">
              Hire individual experts with specialized skills to fill specific
              roles or project requirements on a flexible basis.
            </p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="card-heading text-xl font-bold mb-3">
              Committed Team
            </h2>
            <p className="card-description text-gray-600">
              A dedicated team of professionals works exclusively on your
              project, ensuring long-term collaboration and efficiency.
            </p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="card-heading text-xl font-bold mb-3">
              Role-Based Assets
            </h2>
            <p className="card-description text-gray-600">
              Augment your team with professionals tailored to specific roles
              such as developers, testers, or project managers based on your
              business needs.
            </p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="container1" id="positions">
        <h1 className="main-heading1">Check Our Open Positions</h1>

        <div className="search-row">
          <div className="search-box">
            <input
              type="text"
              id="job-role"
              placeholder="Search Job Role"
              value={searchJobRole}
              onChange={(e) => setSearchJobRole(e.target.value)}
            />
          </div>
          <div className="search-box">
            <input
              type="text"
              id="location"
              placeholder="Search Location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button className="search-btn">Search</button>
            <button className="clear-btn" onClick={clearFields}>
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="job-container container mx-auto px-4 pb-12 grid grid-cols-1 gap-6">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="job-card bg-white p-6 rounded-lg shadow-md"
          >
            <div className="job-info flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="job-title text-xl font-bold">{job.title}</div>
                <div className="job-details">Experience: {job.experience}</div>
                <div className="job-details">
                  Location: {job.location} | No. of Posts: {job.posts}
                </div>
                <div className="job-details">
                  Posting Date: {job.postingDate}
                </div>
              </div>
              <button
                className="apply-btn bg-[#FC7F03] text-white px-6 py-2 rounded"
                onClick={() => openPopup(job.title)}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Job Description Popup */}
      {showJobPopup && (
        <div className="popup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="popup-content bg-white p-6 rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <span
              className="close float-right text-2xl cursor-pointer"
              onClick={closePopup}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-4">{selectedJobTitle}</h2>
            {jobDetails[selectedJobTitle] && (
              <>
                <p className="mb-4">
                  <strong>Description:</strong>
                  <br />
                  {jobDetails[selectedJobTitle].description}
                </p>
                <p className="mb-4">
                  <strong>Responsibilities:</strong>
                  <br />
                  {jobDetails[selectedJobTitle].responsibilities}
                </p>
                <p className="mb-4">
                  <strong>Requirements:</strong>
                  <br />
                  {jobDetails[selectedJobTitle].requirements}
                </p>
              </>
            )}
            <button
              className="apply-btn1 bg-[#FC7F03] text-white px-6 py-2 rounded mt-4"
              onClick={openFormPopup}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}

      {/* Application Form Popup */}
      {showFormPopup && (
        <div className="popup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="popup-content bg-white p-6 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <span
              className="close float-right text-2xl cursor-pointer"
              onClick={closeFormPopup}
            >
              &times;
            </span>
            <h2 className="Custom text-2xl font-bold mb-2">Application Form</h2>
            <hr className="mb-4" />

            <form id="apply" onSubmit={submitForm}>
              {/* Position Field */}
              <div className="form-group mb-4">
                <label htmlFor="position" className="block font-bold mb-1">
                  <strong>Position</strong>
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  className="w-full p-2 border rounded"
                  value={formData.position}
                  readOnly
                  required
                />
              </div>

              {/* Name Field */}
              <div className="form-group mb-4">
                <label htmlFor="name" className="block font-bold mb-1">
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Address Field */}
              <div className="form-group mb-4">
                <label htmlFor="address" className="block font-bold mb-1">
                  <strong>Address</strong>
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="w-full p-2 border rounded"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              {/* Country Field */}
              <div className="form-group mb-4">
                <label htmlFor="country" className="block font-bold mb-1">
                  <strong>Country</strong>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full p-2 border rounded"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* State Field */}
              <div className="form-group mb-4">
                <label htmlFor="state" className="block font-bold mb-1">
                  <strong>State</strong>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full p-2 border rounded"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* City Field */}
              <div className="form-group mb-4">
                <label htmlFor="city" className="block font-bold mb-1">
                  <strong>City</strong>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full p-2 border rounded"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Postal Code Field */}
              <div className="form-group mb-4">
                <label htmlFor="postalcode" className="block font-bold mb-1">
                  <strong>Pin Code</strong>
                </label>
                <input
                  type="text"
                  id="postalcode"
                  name="postalcode"
                  className="w-full p-2 border rounded"
                  value={formData.postalcode}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Contact Number Field */}
              <div className="form-group mb-4">
                <label htmlFor="contact" className="block font-bold mb-1">
                  <strong>Contact Number</strong>
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  className="w-full p-2 border rounded"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-group mb-4">
                <label htmlFor="email" className="block font-bold mb-1">
                  <strong>Email ID</strong>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* CV Upload Field */}
              <div className="form-group mb-6">
                <label htmlFor="cv" className="block font-bold mb-1">
                  <strong>Upload CV</strong>
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  className="w-full p-2 border rounded"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  required
                />
              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="apply-btn bg-[#FC7F03] text-white px-6 py-2 rounded w-full"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
