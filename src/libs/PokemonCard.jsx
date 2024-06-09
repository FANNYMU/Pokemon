import { useState, useEffect } from "react";

function PokemonCard() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading,setLoading] = useState(true);
  const [detail,setDetail] = useState(false);
  const [dataDetail,setDataDetail] = useState([]);
  const [prevUrl,setPrevUrl] = useState('');
  const [nextUrl,setNextUrl] = useState('');

  async function GetAllPokemon(url = "https://pokeapi.co/api/v2/pokemon") {
    const resData = await fetch(url);
    const jsonData = await resData.json();
  
    setPrevUrl(jsonData.previous || '');
    setNextUrl(jsonData.next || '');
  
    const pokemonDetails = await Promise.all(jsonData.results.map(async (item) => {
      const resDataDetails = await fetch(item.url);
      const jsonDataDetails = await resDataDetails.json();
      return jsonDataDetails;
    }));
  
    setPokemonList(pokemonDetails);
  }

  const PokemonDetail = () => {
    return(
        <div className="detail" onClick={()=>{setDetail(false);}}>
            <div className="item">
                <a>X</a>
                <div className="image">
                    <img src={dataDetail.sprites.other.dream_world.front_default} alt="" />
                </div>
                <div className="title">
                    {dataDetail.name}
                </div>
                <div className="abilities">
                    {
                        dataDetail.abilities.map((item,index)=>{
                            return(
                                <span key={index}>{item.ability.name}</span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
  }

  useEffect(() => {
    GetAllPokemon();
    setLoading(false);
  }, []);
  console.log(pokemonList);

  return (
    <div className="py-28">
            <div className="wrapper">
                <div className="content">
                    {
                        loading && (<div className="loading">Sedang Memuat Data Mohon Tunggu.Loading... </div>)
                    }
                    {
                        detail && PokemonDetail()
                    }
                    <div className="grid">
                        {
                            pokemonList.map((item,index) => {
                                return (
                                    <div className="item" key={index} onClick={()=>{setDetail(true);setDataDetail(item)}}>
                                        <div className="image"><img src={item.sprites.front_default} alt="" /></div>
                                        <div className="title">{item.name}</div>
                                    </div>
                                );
                            })
                        }
                    </div>

                    {
                        prevUrl && (
                            <div className="pagination-left">
                                <button onClick={()=>{GetAllPokemon(prevUrl)}}>&laquo;</button>
                            </div>
                        )
                    }

                    {
                        nextUrl && (
                            <div className="pagination-right">
                                <button onClick={()=>{GetAllPokemon(nextUrl)}}>&raquo;</button>
                            </div>
                        )
                    }
                </div>
            </div>
    </div>
  );
}

export default PokemonCard;
