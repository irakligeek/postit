import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";
import { useState } from "react";

export default function Posts() {
  const [modalVisible, setModalVisible] = useState(false);
  const onHideModalHandler = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Outlet />
      <main>
        <PostsList
          isModalVisible={modalVisible}
          onCloseModal={onHideModalHandler}
        />
      </main>
    </>
  );
}

export async function loader() {
  const response = await fetch("https://parseapi.back4app.com/classes/postit", {
    method: "GET",
    headers: {
      "X-Parse-Application-Id": "QLwuR43XCYjwPvt7uxluGschJnqiiRRvxz6T8kfa",
      "X-Parse-REST-API-Key": "fJRplY2E162MqcQfUwxLP1QHVDBP8lPC44LoI43n",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return { status: 400 };
  }

  const data = await response.json();

  return { status: 200, posts: data.results };
}
