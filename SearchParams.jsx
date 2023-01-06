import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";

import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {

    const [requestParams, setParams] = useState({
        location: "", 
        animal: "",
        breed: "",
    });

    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);

    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form action="" onSubmit={
                (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const obj = {
                        location: formData.get("location") ?? "",
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                    }
                    setParams(obj);
                }
            }>
                <label htmlFor="location">
                    Location
                    <input
                        name="location"
                        id="location"
                        placeholder="location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select id="breed"
                        disabled={breeds.length === 0}
                        name="breed"
                    >
                        <option />
                        {
                            breeds.map((breed) => (
                                <option key={breed}>{breed}</option>
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
