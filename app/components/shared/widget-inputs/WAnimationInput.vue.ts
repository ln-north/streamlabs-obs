import { Component, Prop } from 'vue-property-decorator';
import { Multiselect } from 'vue-multiselect';
import { IWInputMetadata, WInput, IWListOption } from './WInput';
import WListInput from './WListInput.vue';

enum EWidgetAnimation {
  bounce, flash, pulse, rubberBand, shake, headShake, swing, tada, wobble, jello, bounceIn, bounceInDown, bounceInLeft,
  bounceInRight, bounceInUp, bounceOut, bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp, fadeIn, fadeInDown,
  fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp, fadeInUpBig, fadeOut, fadeOutDown,
  fadeOutDownBig, fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp, fadeOutUpBig, flip, flipInX,
  flipInY, flipOutX, flipOutY, lightSpeedIn, lightSpeedOut, rotateIn, rotateInDownLeft, rotateInDownRight,
  rotateInUpLeft, rotateInUpRight, rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight,
  hinge, jackInTheBox, rollIn, rollOut, zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp, zoomOut, zoomOutDown,
  zoomOutLeft, zoomOutRight, zoomOutUp, slideInDown, slideInLeft, slideInRight, slideInUp, slideOutDown, slideOutLeft,
  slideOutRight, slideOutUp
}

@Component({
  components: { WListInput }
})

export default class WAnimationInput extends WInput<string, IWInputMetadata> {

  @Prop()
  value: string;

  @Prop()
  metadata: IWInputMetadata;

  @Prop()
  title: string;

  // create options for the WListInput from EWidgetAnimation enum
  animations: IWListOption<string>[] = (() => {
    const keys = Object.keys(EWidgetAnimation);
    const options: IWListOption<string>[] = [];
    const animationsCount = keys.length / 2;
    for (let i = 0; i < animationsCount; i++) {
      const animationName = EWidgetAnimation[keys[i]] as string;
      options.push({ value: animationName, title: animationName });
    }
    return options;
  })();

  listInputMetadata = {
    ...this.options,
    options: this.animations
  };

}
