import { Button } from "antd";
import { useState } from "react";
import { ResourceDesigner } from "../resource-designer/ResourceDesigner.jsx";
import { resourceSample1, resourceSample2 } from "./data.js";
import styles from "./ResourceList.module.css";

export const ResourceList = () => {
  const [resources, setResources] = useState([
    resourceSample1,
    resourceSample2,
  ]);
  const [activeResource, setActiveResource] = useState(null);

  if (activeResource) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: '1000px'}}>
            <ResourceDesigner
              resource={activeResource}
              onResourceChange={(nextResource) => {
                const activeResourceIndex = resources.findIndex(
                  (resource) => resource === activeResource
                );
                const nextResources = [...resources];
                nextResources[activeResourceIndex] = nextResource;
                setResources(nextResources);
                setActiveResource(null);
              }}
            />
        </div>
    );
  }

  return (
    <>
      <div className={styles["list-container"]}>
        {resources.map((resource, index) => (
          <div
            key={index}
            className={styles["list-container__item"]}
            onClick={() => setActiveResource(resource)}
          >
            <div>{resource.name}</div>
            <img width="200px" src={resource.imageUrl}></img>
          </div>
        ))}
      </div>
      <Button onClick={() => setResources([...resources, resourceSample1])}>
        Dodaj Zasób
      </Button>
    </>
  );
};
