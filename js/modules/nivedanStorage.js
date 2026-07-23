const NivedanStorage = {

    save(data){

        localStorage.setItem(
            "introspect_nivedan",
            JSON.stringify(data)
        );

    },

    load(){

        return JSON.parse(
            localStorage.getItem("introspect_nivedan")
        );

    }

};