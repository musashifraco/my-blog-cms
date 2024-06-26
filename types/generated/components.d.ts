import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menuLink';
    icon: 'bulletList';
  };
  attributes: {
    link: Attribute.Text & Attribute.Required;
    text: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 150;
      }>;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-link': MenuMenuLink;
    }
  }
}
