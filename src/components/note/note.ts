import { Directive, ElementRef, Input, Renderer } from '@angular/core';

import { Config } from '../../config/config';
import { Ion } from '../ion';

/**
  * @name Note
  * @module ionic
  * @description
  * A note is detailed item in an ion-item. It creates greyed out element that can be on the left or right side of an item.
  * @usage
  *
  * ```html
  * <ion-content>
  *   <ion-list>
  *     <ion-item>
  *       <ion-note item-left>
  *         Left Note
  *       </ion-note>
  *       My Item
  *       <ion-note item-right>
  *         Right Note
  *       </ion-note>
  *     </ion-item>
  *   </ion-list>
  * </ion-content>
  *```
 * {@link /docs/v2/api/components/api/components/item/item ion-item}
  */
@Directive({
  selector: 'ion-note'
})
export class Note extends Ion {

  /**
   * @input {string} The color to use from your Sass `$colors` map.
   * Default options are: `"primary"`, `"secondary"`, `"danger"`, `"light"`, and `"dark"`.
   * For more information, see [Theming your App](/docs/v2/theming/theming-your-app).
   */
  @Input()
  set color(val: string) {
    this._setColor(val);
  }

  /**
   * @input {string} The mode determines which platform styles to use.
   * Possible values are: `"ios"`, `"md"`, or `"wp"`.
   * For more information, see [Platform Styles](/docs/v2/theming/platform-specific-styles).
   */
  @Input()
  set mode(val: string) {
    this._setMode(val);
  }

  constructor(config: Config, elementRef: ElementRef, renderer: Renderer) {
    super(config, elementRef, renderer, 'note');
  }

}
