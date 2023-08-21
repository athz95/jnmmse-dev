import React from 'react'

type Props = {}

const HospitalFurniture = (props: Props) => {
  return (
    <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9595 1.25H12.0405C13.019 1.24999 13.811 1.24998 14.45 1.31592C15.1122 1.38426 15.6872 1.52925 16.2032 1.86959C16.5013 2.06623 16.7698 2.30444 17.0006 2.57702C17.4 3.0488 17.6124 3.60242 17.7592 4.25178C17.9008 4.87837 17.9952 5.66468 18.1117 6.63624L18.2141 7.48922C18.3337 8.48592 18.4329 9.31206 18.4199 9.97071C18.4062 10.6629 18.2689 11.2996 17.8028 11.825C17.3366 12.3505 16.7208 12.5626 16.0352 12.6587C15.3828 12.7501 14.5507 12.75 13.5469 12.75L12.75 12.75V13.75H17C17.321 13.75 17.6217 13.8364 17.8804 13.9872L18.1593 13.1503C18.228 12.9441 18.2765 12.7986 18.3653 12.6071C18.4512 12.4218 18.4949 12.3485 18.5634 12.2359C18.8483 11.7674 19.2195 11.3604 19.8209 11.0952C20.3873 10.8454 21.0949 10.75 22 10.75C22.4142 10.75 22.75 11.0858 22.75 11.5C22.75 11.9142 22.4142 12.25 22 12.25C21.1726 12.25 20.7105 12.3422 20.4262 12.4676C20.177 12.5776 20.0165 12.7334 19.845 13.0153C19.8146 13.0653 19.802 13.0863 19.7885 13.111C19.7755 13.135 19.7579 13.1695 19.7262 13.2379C19.6755 13.3472 19.6511 13.4184 19.5767 13.6417L18.7115 16.2372C18.6791 16.3345 18.6286 16.4207 18.5651 16.4934C18.1668 17.5212 17.1685 18.25 16 18.25H12.75V19.416C13.9066 19.741 14.8302 20.6188 15.2115 21.7628C15.3425 22.1558 15.1301 22.5805 14.7372 22.7115C14.3442 22.8425 13.9195 22.6301 13.7885 22.2372C13.6115 21.7061 13.2354 21.2729 12.75 21.0206V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21.0206C10.7646 21.2729 10.3885 21.7061 10.2115 22.2372C10.0805 22.6301 9.65579 22.8425 9.26283 22.7115C8.86987 22.5805 8.6575 22.1558 8.78849 21.7628C9.16984 20.6188 10.0934 19.741 11.25 19.416V18.25H8C6.83152 18.25 5.83324 17.5212 5.43491 16.4934C5.37138 16.4207 5.32093 16.3345 5.28849 16.2372L4.42333 13.6417C4.34889 13.4184 4.32447 13.3472 4.2738 13.2379C4.24208 13.1695 4.22448 13.135 4.21147 13.111C4.19798 13.0863 4.18539 13.0653 4.15499 13.0153C3.98353 12.7334 3.82305 12.5776 3.57378 12.4676C3.28947 12.3422 2.82738 12.25 2 12.25C1.58579 12.25 1.25 11.9142 1.25 11.5C1.25 11.0858 1.58579 10.75 2 10.75C2.90513 10.75 3.61274 10.8454 4.17911 11.0952C4.78052 11.3604 5.15168 11.7674 5.43659 12.2359C5.50507 12.3485 5.54881 12.4218 5.63468 12.6071C5.72347 12.7986 5.77196 12.9441 5.84069 13.1504L6.11965 13.9872C6.37825 13.8364 6.67904 13.75 7 13.75H11.25V12.75L10.4531 12.75C9.44927 12.75 8.61721 12.7501 7.96481 12.6587C7.27921 12.5626 6.66337 12.3505 6.19722 11.825C5.73108 11.2996 5.59381 10.6629 5.58013 9.97071C5.56711 9.31207 5.66627 8.48594 5.78591 7.48926L5.88827 6.63627C6.00484 5.66469 6.09919 4.87838 6.2408 4.25178C6.38755 3.60242 6.60002 3.0488 6.99941 2.57702C7.23017 2.30444 7.49868 2.06623 7.79681 1.86959C8.31281 1.52925 8.8878 1.38426 9.55002 1.31592C10.189 1.24998 10.981 1.24999 11.9595 1.25ZM16 16.75C16.6904 16.75 17.25 16.1904 17.25 15.5C17.25 15.3619 17.1381 15.25 17 15.25H7C6.86193 15.25 6.75 15.3619 6.75 15.5C6.75 16.1904 7.30964 16.75 8 16.75H16ZM9.704 2.808C9.16542 2.86358 8.8582 2.96642 8.62269 3.12176C8.44382 3.23974 8.28271 3.38267 8.14426 3.54621C7.96197 3.76153 7.82325 4.05431 7.7039 4.58243C7.58135 5.12469 7.49532 5.83388 7.37276 6.85517L7.28185 7.61278C7.15392 8.67881 7.06914 9.39992 7.07984 9.94106C7.09011 10.4608 7.18863 10.6823 7.31929 10.8296C7.44995 10.9768 7.65812 11.101 8.17293 11.1732C8.70894 11.2483 9.43501 11.25 10.5087 11.25H13.4913C14.565 11.25 15.2911 11.2483 15.8271 11.1732C16.3419 11.101 16.55 10.9768 16.6807 10.8296C16.8114 10.6823 16.9099 10.4608 16.9202 9.94106C16.9309 9.39992 16.8461 8.67881 16.7182 7.61278L16.6272 6.85517C16.5047 5.83388 16.4186 5.12469 16.2961 4.58243C16.1767 4.05431 16.038 3.76153 15.8557 3.54621C15.7173 3.38267 15.5562 3.23974 15.3773 3.12176C15.1418 2.96642 14.8346 2.86358 14.296 2.808C13.743 2.75093 13.0286 2.75 12 2.75C10.9714 2.75 10.257 2.75093 9.704 2.808Z"
      fill="#1C274C"
    />
  </svg>
  )
}

export default HospitalFurniture