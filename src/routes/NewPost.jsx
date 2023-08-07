import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, redirect } from "react-router-dom";
import { Form } from "react-router-dom";

function NewPost() {
  return (
    <Modal>
      <Form className={classes.form} method="POST">
        <h3 className={classes.heading}>Add new post</h3>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body" />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name="author" />
        </p>
        <p className={classes.actions}>
          <Link to="/">Close</Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request, params }) {

  const formData = await request.formData();
  const data = { post: formData.get("body"), author: formData.get("author") };

  const response = await fetch("https://parseapi.back4app.com/classes/postit", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "X-Parse-Application-Id": "QLwuR43XCYjwPvt7uxluGschJnqiiRRvxz6T8kfa",
      "X-Parse-REST-API-Key": "fJRplY2E162MqcQfUwxLP1QHVDBP8lPC44LoI43n",
      "Content-Type": "application/json",
    },
  });

  return redirect("/"); //go to HP
}
