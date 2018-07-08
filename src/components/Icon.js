import React, { Component } from 'react';

class Icon extends Component {
  render() {
    let svg;
    const style = {
      fill: '#fff'
    };
    switch (this.props.type) {
      case 'email':
        svg = <a href="mailto:hi@gez.bz"><svg role="img" viewBox="0 0 24 24" ><path style={style} d="M11.585 5.267c1.834 0 3.558.811 4.824 2.08v.004c0-.609.41-1.068.979-1.068h.145c.891 0 1.073.842 1.073 1.109l.005 9.475c-.063.621.64.941 1.029.543 1.521-1.564 3.342-8.038-.946-11.79-3.996-3.497-9.357-2.921-12.209-.955-3.031 2.091-4.971 6.718-3.086 11.064 2.054 4.74 7.931 6.152 11.424 4.744 1.769-.715 2.586 1.676.749 2.457-2.776 1.184-10.502 1.064-14.11-5.188C-.977 13.521-.847 6.093 5.62 2.245 10.567-.698 17.09.117 21.022 4.224c4.111 4.294 3.872 12.334-.139 15.461-1.816 1.42-4.516.037-4.498-2.031l-.019-.678c-1.265 1.256-2.948 1.988-4.782 1.988-3.625 0-6.813-3.189-6.813-6.812 0-3.659 3.189-6.885 6.814-6.885zm4.561 6.623c-.137-2.653-2.106-4.249-4.484-4.249h-.09c-2.745 0-4.268 2.159-4.268 4.61 0 2.747 1.842 4.481 4.256 4.481 2.693 0 4.464-1.973 4.592-4.306l-.006-.536z"/></svg></a>;
        break;
      case 'twitter':
        svg = <a href="https://www.twitter.com/krisgesling" target="_blank" rel="noopener noreferrer"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style={style} d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg></a>
        break;
      case 'github':
        svg = <a href="https://github.com/krisgesling/" target="_blank" rel="noopener noreferrer"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style={style} d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
        break;
      case 'linkedin':
        svg = <a href="https://www.linkedin.com/in/krisgesling/" target="_blank" rel="noopener noreferrer"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style={style} d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
        break;
      case 'keybase':
        svg = <a href="https://keybase.io/krisgesling" target="_blank" rel="noopener noreferrer"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.446 21.371c0 .528-.428.953-.954.953-.525 0-.954-.425-.954-.953 0-.526.428-.954.953-.954.524 0 .951.431.951.955m5.922-.001c0 .528-.428.953-.955.953-.526 0-.952-.425-.952-.953 0-.526.423-.954.949-.954s.954.431.954.955"/><path style={style} d="M20.904 12.213l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.061-.094-.113-.141-.169-.104-.12-.209-.239-.319-.359l-.076-.08-.091-.099-.135-.131c-.015-.018-.032-.034-.05-.053-1.16-1.139-2.505-1.986-3.955-2.504l-.23-.078c.012-.027.024-.055.035-.083.41-1.064.367-2.223-.12-3.255-.491-1.035-1.356-1.8-2.438-2.16-.656-.216-1.23-.319-1.711-.305-.033-.105-.1-.577.496-1.848L10.663 0l-.287.399c-.33.455-.648.895-.945 1.328-.328-.345-.766-.552-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003c-.061 1.029.727 1.915 1.755 1.979l1.002.061c-.065.84.073 1.62.405 2.306-1.346.562-2.586 1.401-3.66 2.484C.913 14.391.913 18.051.913 20.994v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06c-.833-1.114-1.419-2.426-1.68-3.848l1.913-2.03-.985 3.091 1.74-1.268c3.075-2.234 6.744-2.75 10.91-1.529 1.805.532 3.56.039 4.473-1.257l.104-.165c.091.498.141.998.141 1.496 0 1.563-.255 3.687-1.38 5.512h1.611c.776-1.563 1.181-3.432 1.181-5.512-.001-2.199-.786-4.421-2.184-6.274zM8.894 6.191c.123-1.002.578-1.949 1.23-2.97.025.05.054.097.084.144.264.398.713.625 1.199.605.217-.008.605.025 1.233.232.714.236 1.286.744 1.608 1.425s.349 1.442.079 2.149c-.173.445-.454.82-.806 1.109l-.408-.502-.002-.003c-.279-.341-.694-.535-1.134-.535-.335 0-.664.117-.925.33-.334.27-.514.66-.534 1.058-1.2-.541-1.8-1.643-1.628-3.041l.004-.001zm4.304 5.11l-.519.425c-.046.036-.095.053-.146.053-.066 0-.133-.03-.177-.085l-.111-.135c-.083-.1-.067-.25.034-.334l.51-.42-1.055-1.299c-.109-.133-.091-.33.044-.436.058-.048.126-.072.194-.072.091 0 .181.038.24.113l2.963 3.645c.109.135.09.33-.042.436-.039.029-.082.053-.126.063-.023.006-.045.009-.07.009-.09 0-.178-.04-.24-.113l-.295-.365-1.045.854c-.046.037-.1.055-.154.055-.068 0-.139-.03-.186-.09l-.477-.579c-.082-.102-.068-.252.035-.336l1.051-.857-.426-.533-.002.001zM7.753 4.866l-1.196-.075c-.255-.015-.45-.235-.435-.488l.09-1.401c.014-.245.216-.436.461-.436h.024l1.401.091c.123.006.236.06.317.152.083.094.123.21.116.336l-.007.101c-.32.567-.585 1.134-.773 1.72h.002zm12.524 11.481c-.565.805-1.687 1.081-2.924.718-3.886-1.141-7.396-.903-10.468.701l1.636-5.123-5.291 5.609c.099-3.762 2.453-6.966 5.758-8.311.471.373 1.034.66 1.673.841.16.044.322.074.48.102-.183.458-.119.997.21 1.407l.075.09c-.172.45-.105.975.221 1.374l.475.582c.266.325.659.513 1.079.513.321 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113.113 0 .222-.01.33-.035.218-.05.424-.15.598-.291.623-.51.72-1.435.209-2.06l-1.67-2.056c.145-.117.281-.244.408-.381.135.037.271.078.4.12.266.097.533.198.795.315 1.005.445 1.954 1.1 2.771 1.897.029.03.059.055.085.083l.17.175c.038.039.076.079.111.12.079.085.16.175.239.267l.126.15c.045.053.086.104.13.16l.114.15c.04.051.079.102.117.154.838 1.149.987 2.329.404 3.157v.005z"/><path style={style} d="M7.719 4.115l-.835-.051.053-.835.834.051-.052.835z"/></svg></a>
    }
    return (
      <div className="icon">
        {svg}
      </div>

    )
  }
}

export default Icon;
