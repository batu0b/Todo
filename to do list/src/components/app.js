import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura ode", tamamlandi: false },
];

const App = () => {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState("");

  const markText = (id) => {
    setListe(
      liste.map((el) =>
        el.id === id ? { ...el, tamamlandi: !el.tamamlandi } : el
      )
    );
  };

  const addItem = (n) => {

    if(n === "") {

        setListe(liste);



    }

    else{

        setListe([...liste, { id: Date.now(), tamamlandi: false, baslik: n }]);
        setYeniBaslik("");


    }
 
  };

  const deleteItems = () => {

    setListe(liste.filter(item=> !item.tamamlandi ));




  }


  console.log(yeniBaslik);
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          value={yeniBaslik}
          onChange={(e) => setYeniBaslik(e.target.value)}
          placeholer="listeye ekle"
        />
        <button onClick={() => addItem(yeniBaslik)}>Ekle</button>
      </div>
      <div className="liste">
        {liste.map((item) => (
          <div
            onClick={() => markText(item.id)}
            className={item.tamamlandi ? "yapildi" : ""}
            key={item.id}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={()=>deleteItems()}>Tamamlananları Temizle</button>
    </div>
  );
};

export default App;
