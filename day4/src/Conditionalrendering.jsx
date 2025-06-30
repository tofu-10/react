function Item({ name, isPacked }) {
    // return (
    //     <li className="item">
    //         {name} {isPacked?"✅":"❌"}
    //     </li>
    // );

    return (isPacked && <li className="item">{name}</li>)

}                                                                                                   
//   return <li className="item">{name}</li>;
// }



export default function PackingList() {
  return (
    <section>
      <h1>Rijan Shrestha Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet witha golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
