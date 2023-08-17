import logo from "./logo.svg";
import "./App.css";
import Accordion from "./accordion/Accordion";
import Card from "./card/Card";
import QueryForm from "./queryform/QueryForm";

const faqList = [
  {
    q: "How much time does it takes to build a mobile app?",
    a: "It takes approx 3-4 weeks.",
  },
  {
    q: "How much time does it takes to build a mobile app?",
    a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ratione dicta, distinctio cumque inventore omnis quas eaque iste cupiditate. Ab expedita nobis animi earum obcaecati perferendis! Earum libero ipsam aut!.",
  },
  {
    q: "How much time does it takes to build a mobile app?",
    a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ratione dicta, distinctio cumque inventore omnis quas eaque iste cupiditate. Ab expedita nobis animi earum obcaecati perferendis! Earum libero ipsam aut!.",
  },
  {
    q: "How much time does it takes to build a mobile app?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis earum rem ipsum! Obcaecati doloremque nobis unde odio nesciunt sequi optio excepturi? Recusandae dolores aspernatur, commodi totam facere perspiciatis error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam aliquid, veritatis dolorem cum necessitatibus dolore fugit nostrum consequuntur accusantium ullam dolorum quibusdam esse culpa, explicabo vero commodi, vitae aliquam.",
  },
  {
    q: "How much time does it takes to build a mobile app?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis earum rem ipsum! Obcaecati doloremque nobis unde odio nesciunt sequi optio excepturi? Recusandae dolores aspernatur, commodi totam facere perspiciatis error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam aliquid, veritatis dolorem cum necessitatibus dolore fugit nostrum consequuntur accusantium ullam dolorum quibusdam esse culpa, explicabo vero commodi, vitae aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam aliquid, veritatis dolorem cum necessitatibus dolore fugit nostrum consequuntur accusantium ullam dolorum quibusdam esse culpa, explicabo vero commodi, vitae aliquam. ",
  },
];

function App() {
  return (
    <>
      {/* <Accordion faqList={faqList} /> */}
      {/* <Card /> */}
      <QueryForm />
    </>
  );
}

export default App;
