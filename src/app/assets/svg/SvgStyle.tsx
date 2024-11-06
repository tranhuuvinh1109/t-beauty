import { SVGProps } from "react";

const SvgStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="68"
    height="68"
    viewBox="0 0 68 68"
    fill="none"
    {...props}
  >
    <path d="M54.4432 35.1634C53.9023 35.0641 53.3831 35.4223 53.2839 35.9635C53.1847 36.5046 53.5429 37.0236 54.084 37.1228C59.714 38.1552 63.8001 43.0615 63.8001 48.7891C63.8001 54.5462 59.6768 59.3578 54.2286 60.4274C54.2178 60.4292 54.2069 60.4298 54.1962 60.4318C53.4477 60.5766 52.6881 60.65 51.9392 60.65C45.399 60.65 40.0781 55.3292 40.0781 48.7891C40.0781 42.9869 44.2569 38.138 49.7944 37.1228C50.3355 37.0236 50.6937 36.5046 50.5944 35.9635C50.4952 35.4223 49.9754 35.0638 49.4351 35.1634C46.2602 35.7456 43.5078 37.3843 41.5077 39.6745L35.3142 37.276V33.8191C37.5586 32.1009 39.1063 29.5186 39.4576 26.5733C42.1251 26.4549 44.1113 24.3206 44.1113 21.7831C44.1113 20.6073 43.6793 19.4859 42.9114 18.6202V14.2484C42.9116 6.39173 36.5199 0 28.6635 0C20.8071 0 14.4153 6.39173 14.4153 14.2483V18.7332C13.6386 19.5916 13.2158 20.655 13.2158 21.783C13.2158 24.3177 15.1979 26.4545 17.8689 26.573C18.2189 29.537 19.7833 32.2266 22.2471 33.9859V37.2758L8.24944 42.7025C8.2432 42.7049 8.23695 42.7075 8.23071 42.71C7.98434 42.8113 2.19531 45.269 2.19531 52.0353V65.7435C2.19531 66.9877 3.20748 68 4.4518 68C5.06937 68 52.4795 68 53.1358 68C54.374 68 55.3814 66.9928 55.3814 65.7544V62.2096C61.3604 60.6751 65.7924 55.2402 65.7924 48.7893C65.7924 42.0997 61.0193 36.3692 54.4432 35.1634ZM38.2279 40.5406L34.6394 47.7323C34.5908 47.6977 33.6905 47.0581 30.223 44.5955C32.7691 41.4528 31.9164 42.5053 34.6353 39.1491L38.2279 40.5406ZM31.3504 47.8403L30.3245 49.3845H27.2449L26.2191 47.8403L28.7848 46.0181L31.3504 47.8403ZM24.2395 37.5959V35.1096C25.5856 35.6887 27.1823 36.0267 28.8047 36.0267C30.368 36.0267 31.9161 35.6843 33.3222 35.0282V37.6053L28.7846 43.2063L24.2395 37.5959ZM41.1556 23.8875C40.7027 24.2771 40.1454 24.5091 39.5365 24.5695V18.9972C42.0878 19.2443 42.9784 22.3198 41.1556 23.8875ZM17.791 24.5695C16.2594 24.4178 15.2083 23.1913 15.2083 21.7831C15.2083 20.3712 16.4341 19.265 17.791 19.0425V24.5695ZM17.8235 17.0295C17.3593 17.0719 16.8075 17.2089 16.4076 17.3647V14.2483C16.4076 7.49036 21.9055 1.99232 28.6634 1.99232C35.4211 1.99232 40.9193 7.49023 40.9193 14.2483V17.2773C40.4798 17.121 40.0161 17.0263 39.5365 16.9979C39.5365 15.8007 39.682 16.1414 36.2112 12.4178C35.9338 12.1201 35.6083 11.6832 34.9198 11.5386C34.441 11.4379 33.927 11.5233 33.4907 11.8085C29.5763 14.3655 24.6641 15.801 19.9458 15.4918C18.7928 15.4157 18.0012 16.0714 17.8235 17.0295ZM19.7833 25.2951C19.7833 24.4607 19.7833 18.3437 19.7833 17.4783C24.8522 17.8177 30.2003 16.3172 34.5144 13.5191C36.3146 15.4533 37.2829 16.4571 37.5443 16.7937C37.5443 26.7304 37.5465 24.9622 37.5387 25.5135C37.4225 30.2095 33.5728 34.0344 28.8047 34.0344C23.5002 34.0345 19.7833 29.9447 19.7833 25.2951ZM22.9281 39.1517L27.3414 44.5991C25.9037 45.6202 23.6779 47.2013 22.9297 47.7325L19.3413 40.5409L22.9281 39.1517ZM13.4093 66.0078V54.1588C13.4093 53.6087 12.9635 53.1627 12.4132 53.1627C11.863 53.1627 11.4171 53.6087 11.4171 54.1588V66.0078H4.4518C4.3061 66.0078 4.18763 65.8892 4.18763 65.7436V52.0355C4.18763 46.6763 8.71415 44.6695 8.98216 44.5555L17.475 41.263L21.211 48.7504C21.211 48.7504 21.211 48.7504 21.2111 48.7506C21.4554 49.24 21.8998 49.5967 22.4304 49.7294C23.4012 49.9722 23.9794 49.4308 24.5937 48.9945L25.6627 50.6034L23.0555 66.0078H13.4093ZM44.168 66.0077H34.5139L33.6198 60.7248C33.5282 60.1825 33.0156 59.8177 32.4715 59.9088C31.9291 60.0006 31.5639 60.5148 31.6556 61.0572L32.4936 66.0077H25.0762L27.5527 51.3767H30.0173L30.8689 56.4084C30.9605 56.9508 31.474 57.3162 32.0173 57.2244C32.5597 57.1326 32.9249 56.6184 32.8332 56.0761L31.9069 50.6034L32.9759 48.9945L33.6031 49.44C34.5387 50.1047 35.8464 49.7763 36.3583 48.7507C36.3584 48.7507 36.3584 48.7507 36.3584 48.7507L40.0942 41.2636L40.2642 41.3294C38.8795 43.4958 38.086 46.0745 38.086 48.7895C38.086 53.5501 40.5002 57.7574 44.1682 60.252L44.168 66.0077ZM53.3894 65.7545C53.3894 65.8943 53.2758 66.0078 53.1361 66.0078H46.1604V61.3781C47.9203 62.1892 49.8778 62.6427 51.9394 62.6427C52.4291 62.6427 52.9127 62.6168 53.3895 62.567L53.3894 65.7545Z"></path>
    <path d="M56.6591 45.8458C56.275 45.4519 55.6447 45.4436 55.2503 45.8277L51.3341 49.645L49.6935 48.0369C49.3006 47.6519 48.6699 47.6582 48.2847 48.0511C47.8997 48.444 47.9059 49.0747 48.2988 49.4599L50.6348 51.7492C50.8285 51.939 51.0803 52.0339 51.3321 52.0339C51.583 52.0339 51.8339 51.9398 52.0274 51.7512L56.6409 47.2544C57.0349 46.8703 57.0429 46.2397 56.6591 45.8458Z"></path>
    <path d="M51.9297 39.5781C46.8766 39.5781 42.7656 43.6891 42.7656 48.7422C42.7656 53.7953 46.8766 57.9062 51.9297 57.9062C56.9828 57.9062 61.0937 53.7953 61.0937 48.7422C61.0937 43.6891 56.9828 39.5781 51.9297 39.5781ZM51.9297 56.142C47.8494 56.142 44.5298 52.8224 44.5298 48.7421C44.5298 44.6618 47.8493 41.3421 51.9297 41.3421C56.01 41.3421 59.3296 44.6618 59.3296 48.7421C59.3296 52.8224 56.01 56.142 51.9297 56.142Z"></path>
  </svg>
);

export default SvgStyle;