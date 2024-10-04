export default class ButtonClass {

  private static commonButtonClass = `
    inline-flex justify-center items-center gap-x-3 text-center py-2 px-2
    border border-transparent font-semibold text-sm rounded focus:outline-none
    transition duration-300 ease-in-out border border-2
  `;

  static BlackButtonClass = `${this.commonButtonClass} text-white hover:bg-gray-700 bg-gray-800`;

  static BlueButtonClass = `${this.commonButtonClass} text-white hover:bg-blue-800 bg-blue-700`;

  static PurpleButtonClass = `${this.commonButtonClass} text-white hover:bg-purple-800 bg-purple-700`;

  static WhiteButtonClass = `${this.commonButtonClass} text-gray-800 hover:bg-gray-200 bg-white`;

  static YellowButtonClass = `${this.commonButtonClass} text-gray-800 hover:bg-yellow-600 bg-yellow-400`;

  static WhiteBorderButtonClass = `${this.commonButtonClass} border-white text-white hover:text-gray-800 hover:bg-white`;

  static TransparentButtonsClass = (extra?:string) => `${this.commonButtonClass} ${extra}`;

  static TraslucidBlackButtonClass = (extra?:string) => `${this.commonButtonClass} bg-black bg-opacity-50 hover:bg-opacity-100 ${extra}`;

}