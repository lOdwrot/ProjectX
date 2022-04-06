import { Input } from "antd";
import { useState } from "react";
import { Attribute } from "./Attribute";

export const ResourceDesigner = ({
    resource,
    onResourceChange
}) => {
  const [name, setName] = useState(resource.name);
  const [price, setPrice] = useState(resource.price);
  const [imageUrl, setImageUrl] = useState(
    resource.imageUrl
  );
  const [attributes, setAttributes] = useState(resource.attributes);

  const submit = () => {
    onResourceChange({
        ...resource,
        name,
        price,
        imageUrl,
        attributes
    })
  };

  const attributeChange = (nextAttribute, index) => {
    const nextAttributes = [...attributes];
    nextAttributes[index] = nextAttribute;
    setAttributes(nextAttributes);
  };

  return (
    <div>
      Projektowanie Zasobów
      <div>
        Nazwa
        <Input onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div>
        Obrazek
        <Input onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} />
      </div>
      <img width="200px" src={imageUrl}></img>
      <div>
        Cena
        <Input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
        />{" "}
        Eur
      </div>
      Atrybuty:
      {attributes.map((attribute, index) => (
        <Attribute
          attribute={attribute}
          onAttributeChange={(attribute) => attributeChange(attribute, index)}
          key={index}
        />
      ))}
      <button
        onClick={() =>
          setAttributes([
            ...attributes,
            {
              name: "",
              value: "",
              unit: "",
            },
          ])
        }
      >
        +
      </button>
      <button onClick={submit}>submit</button>
    </div>
  );
};