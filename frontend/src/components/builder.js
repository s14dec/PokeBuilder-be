import React, { Component } from "react";
import styled from "styled-components";
import Autocomplete from "react-autocomplete";
import FetchData from "./fetch-data";
import TeamList from "./team-list";



export default class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pokemon: [],
      value: "",
      team: [],
      isFull: false,
      selectPokemon: () => {}
    };
  }

  async componentDidMount() {
    await this.getBWPokemon();
  }

  async getBWPokemon() {
    const unovaPokemon = await FetchData(
      "https://pokeapi.co/api/v2/pokedex/9/"
    );
    const pokemonData = Object.values(unovaPokemon.pokemon_entries);
    const pokemon = [];
    pokemonData.map(data => pokemon.push(data.pokemon_species.name));
    this.setState({
      isLoading: false,
      pokemon
    });
  }

  selectPokemon = value => {
    const myTeam = this.state.team;
    if (myTeam.length >= 6) {
      this.setState({ isFull: true });
      return;
    } else myTeam.push(value);
    console.log("Selected: ", value);
    console.log(myTeam);
    this.setState({ team: myTeam });
  };

  clearTeam = () => {
    const emptyTeam = [];
    this.setState({
      team: emptyTeam,
      isFull: false
    });
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div />
        ) : (
          <div>
            <h1 style={{ textAlign: "center" }}>Pokemon Team Builder</h1>
            <p style={{ textAlign: "center" }}>
              Select from the dropdown, or type here to choose your Pokemon!
            </p>
            <div>
              <div
                items={this.state.pokemon.map(item => ({
                  id: item,
                  label: item
                }))}
                shouldItemRender={(item, value) =>
                  item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
                }
                getItemValue={item => item.label}
                initialValue=""
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                onSelect={this.selectPokemon}
                renderItem={(item, highlighted) => (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: highlighted ? "#3e9fe6" : "#fff",
                      color: highlighted ? "#fff" : "#3e9fe6"
                    }}
                  >
                    <li>{item.label}</li>
                  </div>
                )}
              />
            </div>
            {this.state.isFull ? <div>Your team is already full! Only 6 Pokemon per team.</div> : ""}
            <div title="My Team:" team={this.state.team} />
            <div warn onClick={this.clearPokemon}>
              Restart
            </div>
          </div>
        )}
      </div>
    );
  }
}

