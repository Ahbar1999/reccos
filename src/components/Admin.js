import React from "react";

export default function Admin(props) {
  const [formData, setFormData] = React.useState({
    movie: "",
    book: "",
    surprise: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(`${name}: ${value}`);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let data;
    let url;
    for (const property in formData) {
      if (formData[property] !== "") {
        data = { name: formData[property] };
        url = property;
      }
    }
    // console.log(data);
    // console.log(url);
    try {
      await fetch(`/${url}`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(`New ${url} submitted successfully`);
      setFormData({
        movie: "",
        book: "",
        surprise: "",
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1 className="admin-title">Admin Site</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          className="admin-form-section"
          type="text"
          placeholder="Movie Name"
          onChange={handleChange}
          name="movie"
          value={formData.movie}
        />
        <button className="submit-btn">Submit</button>
      </form>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          className="admin-form-section"
          type="text"
          placeholder="Book Name"
          onChange={handleChange}
          name="book"
          value={formData.book}
        />
        <button className="submit-btn">Submit!</button>
      </form>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          className="admin-form-section"
          type="text"
          placeholder="Surprise Name"
          onChange={handleChange}
          name="surprise"
          value={formData.surprise}
        />
        <button className="submit-btn">Submit!</button>
      </form>
    </div>
  );
}
