import { Text, TextInput, View } from "react-native";
import { useState } from "react";
import styles from "../config/styles";

export default function BuscaCep() {
  // variáveis em React Native são estados / states
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    logradouro: "",
    uf: "",
    localidade: "",
  });

  function buscaCep() {
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEndereco({
          logradouro: data.logradouro,
          uf: data.uf,
          localidade: data.localidade,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.h1,
          ...styles.corDestaque,
        }}
      >
        Busca CEP h1 grandão, tomate
      </Text>
      <Text style={styles.h2}>Enconte o endereço pelo CEP</Text>
      <TextInput
        value={cep} // valor do input
        onChangeText={setCep} // função que atualiza o valor do input
        maxLength={8} // tamanho máximo do input
        inputMode="numeric" // tipo do teclado
        placeholder="Digite o CEP" // texto de placeholder
        style={styles.inputText} // estilo do input
        onBlur={buscaCep}
      />
      <TextInput
        style={styles.inputText}
        value={endereco.logradouro}
        placeholder="Rua / Logradouro"
      />
      <TextInput
        style={styles.inputText}
        value={endereco.localidade}
        placeholder="Cidade"
      />
      <TextInput
        style={styles.inputText}
        value={endereco.uf}
        placeholder="Estado"
      />
    </View>
  );
}
