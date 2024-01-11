import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentQuestion extends Schema.Component {
  collectionName: 'components_component_questions';
  info: {
    displayName: 'question';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface ComponentTech extends Schema.Component {
  collectionName: 'components_component_teches';
  info: {
    displayName: 'tech';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.question': ComponentQuestion;
      'component.tech': ComponentTech;
    }
  }
}
