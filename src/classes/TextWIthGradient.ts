// Generate more graddints: https://www.creative-tim.com/twcomponents/gradient-generator

export default class TextWithGradient {

  private static commonClasses = 'bg-gradient-to-r bg-clip-text text-transparent';

  static gradient1 = `${this.commonClasses} from-sky-600 to-violet-600`;

  static gradient2 = `${this.commonClasses} from-yellow-300 to-orange-500`;

  static gradient3 = `${this.commonClasses} from-rose-400 to-pink-600`;

}