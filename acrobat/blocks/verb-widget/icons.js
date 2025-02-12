// icons.js

// Object mapping icon names to SVG strings
const ICONS = {
  WIDGET_ICON: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0.3 24 23.4"><g id="Surfaces"><path fill="#b30b00" d="M4.25.3h15.5A4.24643,4.24643,0,0,1,24,4.55v14.9a4.24643,4.24643,0,0,1-4.25,4.25H4.25A4.24643,4.24643,0,0,1,0,19.45V4.55A4.24643,4.24643,0,0,1,4.25.3Z"/></g><g id="Outlined_Mnemonics_Logos" data-name="Outlined Mnemonics Logos"><path id="_256" data-name=" 256" fill="#fff" d="M19.3,13.85a1.78946,1.78946,0,0,0-.44031-.33547,2.83828,2.83828,0,0,0-.59969-.24078,4.79788,4.79788,0,0,0-.75719-.14516A7.94332,7.94332,0,0,0,16.59,13.08q-.27375.00375-.54891.017-.27492.01337-.54984.03672-.2747.02345-.548.05734-.273.034-.54328.07891-.1725-.16875-.33891-.345-.16617-.17625-.32484-.36-.15844-.18375-.308-.375-.1493-.19125-.28828-.39-.10875-.14625-.212-.29625-.10337-.15-.20172-.30375-.09845-.15375-.19234-.31125-.094-.1575-.18391-.31875.17625-.55125.30766-1.04813.13148-.49688.21859-.93937.08718-.4425.13047-.83063A6.52908,6.52908,0,0,0,13.05,7.03a3.675,3.675,0,0,0-.08594-.80563A2.42373,2.42373,0,0,0,12.685,5.505a1.4927,1.4927,0,0,0-.50406-.51688A1.44959,1.44959,0,0,0,11.42,4.79a1.19728,1.19728,0,0,0-.30547.04719A1.22057,1.22057,0,0,0,10.41,5.38a2.17839,2.17839,0,0,0-.25078.82187,4.69881,4.69881,0,0,0,.007,1.08813,7.85466,7.85466,0,0,0,.25641,1.26812A10.26146,10.26146,0,0,0,10.92,9.92c-.0725.2125-.14625.42312-.222.63391s-.1536.42171-.23422.63484-.16406.42844-.25109.648S10.035,12.28,9.94,12.51q-.12375.2925-.25344.58281Q9.55672,13.383,9.42,13.67q-.13688.28688-.28156.56969Q8.99359,14.52235,8.84,14.8c-.3075.1225-.70125.28937-1.12281.49156A12.99444,12.99444,0,0,0,6.4275,15.995a6.08618,6.08618,0,0,0-1.10594.86094A1.9673,1.9673,0,0,0,4.75,17.82a1.08624,1.08624,0,0,0-.01969.29219,1.10366,1.10366,0,0,0,.05719.28281,1.13932,1.13932,0,0,0,.12844.26031A1.17812,1.17812,0,0,0,5.11,18.88a1.45543,1.45543,0,0,0,.23312.17047,1.49272,1.49272,0,0,0,.25938.12078,1.5496,1.5496,0,0,0,.27812.07016A1.60815,1.60815,0,0,0,6.17,19.26a2.26684,2.26684,0,0,0,1.16953-.36984,5.403,5.403,0,0,0,1.12172-.95391,11.55912,11.55912,0,0,0,1.02609-1.30453c.32078-.46734.61766-.95422.88266-1.42172q.225-.075.45172-.14781.22664-.07266.45453-.14219.22781-.06938.45641-.13469.22851-.06515.45734-.12531.25125-.0675.49687-.12766.24562-.06022.48563-.11359.24-.05343.47437-.10047.23438-.0471.46313-.08828a7.87389,7.87389,0,0,0,1.20266.87266,6.26924,6.26924,0,0,0,1.08359.50609,5.254,5.254,0,0,0,.913.23422A4.37649,4.37649,0,0,0,18,15.9a2.59368,2.59368,0,0,0,.65125-.07453A1.51031,1.51031,0,0,0,19.1,15.63375a1.1277,1.1277,0,0,0,.28375-.26109A1.11325,1.11325,0,0,0,19.54,15.09a1.22521,1.22521,0,0,0,.068-.32313,1.25587,1.25587,0,0,0-.12281-.63875A1.23791,1.23791,0,0,0,19.3,13.85Zm-1.09.76a.5154.5154,0,0,1-.08641.19734.58489.58489,0,0,1-.16234.15141.79481.79481,0,0,1-.228.097A1.1248,1.1248,0,0,1,17.45,15.09c-.03,0-.05937-.00062-.08828-.002s-.05734-.00359-.08547-.00672-.05594-.00719-.08359-.01234S17.1375,15.0575,17.11,15.05a4.95589,4.95589,0,0,1-.55719-.16906,5.26538,5.26538,0,0,1-.54781-.23844,5.88716,5.88716,0,0,1-.54031-.30969q-.26859-.173-.53469-.38281.19875-.03.39938-.0525t.40312-.0375q.2025-.015.40688-.0225T16.55,13.83q.135-.00375.27-.00015.135.00351.27.0139.135.01032.27.027.135.01665.27.03922a1.06557,1.06557,0,0,1,.23406.06438.67592.67592,0,0,1,.20594.12812.47151.47151,0,0,1,.13094.20688A.61536.61536,0,0,1,18.21,14.61ZM11.05,5.76a.44669.44669,0,0,1,.06312-.08922.418.418,0,0,1,.08188-.06953.38563.38563,0,0,1,.09687-.04516A.37033.37033,0,0,1,11.4,5.54a.3585.3585,0,0,1,.23219.07781.49431.49431,0,0,1,.14031.19969,1.11421,1.11421,0,0,1,.06906.27094A2.13908,2.13908,0,0,1,11.86,6.38a4.75269,4.75269,0,0,1-.03313.52266c-.02187.19453-.05437.408-.09687.63609s-.095.47094-.15688.72422S11.44,8.78,11.36,9.05a8.57492,8.57492,0,0,1-.34656-1.17359,5.96418,5.96418,0,0,1-.13094-.95516,3.50469,3.50469,0,0,1,.03031-.71328A1.38226,1.38226,0,0,1,11.05,5.76Zm.91,8.03q-.12375.03375-.2475.06766-.12375.034-.2475.06859-.12375.03468-.2475.07047-.12375.03585-.2475.07328.0675-.135.13125-.26813t.12375-.26437q.06-.13125.11625-.26063T11.45,13.02q.0675-.16875.13469-.33578.067-.16711.13281-.333.06563-.16595.12906-.33109.06329-.16524.12344-.33016.0525.0825.10516.16328.05272.08087.10609.16047.05343.07968.108.15859.0546.079.11078.15766.10875.15.21969.29625.11109.14625.22531.28875.11438.1425.23281.28125.11859.13875.24219.27375a1.28474,1.28474,0,0,0-.14922.02891c-.09234.02015-.22016.04922-.362.08234s-.29781.07031-.44641.10672S12.0725,13.76,11.96,13.79Zm-3.51,2c-.2525.405-.50375.7725-.74766,1.09594a8.70907,8.70907,0,0,1-.70359.83156,3.63,3.63,0,0,1-.623.52781A.99041.99041,0,0,1,5.87,18.43a.43094.43094,0,0,1-.06875-.00563.4412.4412,0,0,1-.06875-.01687.4004.4004,0,0,1-.065-.02813A.33419.33419,0,0,1,5.61,18.34a.384.384,0,0,1-.07094-.07609.36982.36982,0,0,1-.06687-.18969A.38084.38084,0,0,1,5.48,17.97a1.11708,1.11708,0,0,1,.27422-.47844,3.84739,3.84739,0,0,1,.61453-.54406,8.74359,8.74359,0,0,1,.91266-.57781C7.63063,16.175,8.0225,15.98,8.45,15.79Z"/></g></svg>',
  fillsign: '<svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.6929 117.763C70.6944 117.64 78.6564 112.067 80.2681 109.998C80.3304 110.597 78.5897 113.414 79.3073 115.008C79.6105 115.592 80.0808 116.074 80.6583 116.39C81.2359 116.706 81.8945 116.844 82.5504 116.785C88.139 115.576 93.4318 113.269 98.1217 109.998C98.0164 110.611 95.1133 113.674 95.4691 115.343C95.556 115.863 95.7668 116.354 96.0838 116.775C96.4007 117.196 96.8144 117.535 97.2899 117.763C102.475 120.348 112.336 111.945 114.285 108.989C114.621 108.481 114.742 107.861 114.622 107.264C114.502 106.667 114.15 106.142 113.645 105.803C113.396 105.637 113.117 105.521 112.823 105.462C112.529 105.404 112.227 105.404 111.933 105.462C111.64 105.52 111.36 105.636 111.111 105.802C110.862 105.969 110.649 106.182 110.482 106.431C107.948 109.437 104.579 111.623 100.801 112.711C101.045 112.206 103.171 108.668 103.431 108.254C103.852 107.674 104.232 107.065 104.569 106.431C104.839 105.938 104.98 105.384 104.98 104.822C104.98 104.259 104.839 103.706 104.569 103.212C104.143 102.494 103.366 101.936 101.359 101.936C98.0788 102.837 95.0038 104.363 92.303 106.431C90.0691 108.019 87.7068 109.417 85.2405 110.612C85.634 109.127 86.1061 107.665 86.6547 106.231C87.825 103.782 88.7385 101.854 87.7182 100.183C87.4552 99.7655 87.0892 99.4221 86.6553 99.1861C86.2215 98.9502 85.7343 98.8296 85.2405 98.8359C83.6938 98.9898 82.2268 99.5962 81.0229 100.579C79.819 101.562 78.9315 102.878 78.4715 104.363C75.6785 108.011 71.8187 110.699 67.4283 112.053C66.7405 112.23 66.0191 112.23 65.3313 112.053C67.4636 110.054 69.4869 107.943 71.3927 105.727C73.2033 103.414 77.2347 97.6261 75.4239 93.7665C75.0195 92.9519 74.3801 92.2772 73.5884 91.8296C72.7967 91.382 71.889 91.182 70.9825 91.2554C67.3478 91.3616 63.1493 95.7419 60.8834 100.014C58.7442 103.984 57.2548 108.27 56.4717 112.711C55.9796 113.674 56.2521 113.153 51.7498 113.414H16.1556L29.3217 83.6896L96.004 12.9632C96.3468 12.5941 96.7605 12.2979 97.2204 12.0923C97.6804 11.8867 98.177 11.7761 98.6807 11.7669C99.1782 11.7282 99.678 11.8034 100.142 11.9868C100.606 12.1703 101.022 12.4572 101.359 12.8258L108.701 20.2338C109.442 21.0036 109.864 22.0262 109.882 23.0951C109.899 24.164 109.51 25.1996 108.793 25.9929L43.0518 95.7113C42.6362 96.155 42.4126 96.7449 42.4297 97.3527C42.4468 97.9604 42.7032 98.5369 43.1431 98.9566C43.3604 99.1641 43.6169 99.3261 43.8976 99.4333C44.1784 99.5404 44.4777 99.5904 44.778 99.5804C45.0783 99.5704 45.3736 99.5005 45.6465 99.375C45.9195 99.2494 46.1647 99.0706 46.3677 98.8491L112.123 29.1303C113.639 27.46 114.463 25.275 114.426 23.0194C114.389 20.7639 113.494 18.607 111.924 16.9873L104.569 9.56119C103.798 8.76371 102.866 8.13858 101.836 7.72694C100.806 7.3153 99.7002 7.12648 98.5918 7.1729C97.4808 7.18925 96.3847 7.43109 95.3699 7.88374C94.3552 8.3364 93.443 8.99045 92.6886 9.80622L25.6707 80.9038C25.444 81.1295 25.2769 81.4079 25.1843 81.7142L10.8779 115.008C10.758 115.353 10.7217 115.722 10.7719 116.084C10.8222 116.446 10.9575 116.79 11.1669 117.09C11.3958 117.386 11.6915 117.623 12.0299 117.783C12.3682 117.942 12.7396 118.02 13.1135 118.008H54.6776C56.614 118.257 58.5767 117.825 60.2291 116.785C62.2659 117.653 64.4902 117.99 66.6929 117.763Z" fill="#864CCC"/><path d="M70.9834 96.0629C73.159 98.5045 64.0584 110.002 61.6201 110.002C63.2695 101.623 68.8078 93.6214 70.9834 96.0629Z" fill="#864CCC"/><path opacity="0.1" d="M29.3213 83.6904L96.0035 12.964C96.3463 12.5949 96.7601 12.2986 97.22 12.0931C97.6799 11.8875 98.1766 11.7769 98.6803 11.7677C99.1778 11.7289 99.6776 11.8042 100.142 11.9876C100.606 12.1711 101.022 12.458 101.358 12.8265L108.7 20.2345C109.442 21.0044 109.864 22.027 109.881 23.0959C109.898 24.1648 109.509 25.2004 108.792 25.9936L43.0514 95.7121L29.3213 83.6904Z" fill="#864CCC"/></svg>',
  'compress-pdf': '<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 148.786V206.666C40 210.203 41.4048 213.594 43.9053 216.095C46.4058 218.595 49.7972 220 53.3334 220H186.667C190.203 220 193.594 218.595 196.095 216.095C198.595 213.594 200 210.203 200 206.666V148.806L206.667 155.433V206.666C206.667 211.767 204.718 216.675 201.218 220.387C197.719 224.098 192.934 226.333 187.842 226.632L186.667 226.666H53.3334C48.029 226.666 42.942 224.559 39.1912 220.809C35.4405 217.058 33.3334 211.971 33.3334 206.666V155.413L40 148.786ZM155.867 13.3331C158.047 13.327 160.207 13.754 162.222 14.5895C164.236 15.4249 166.064 16.6521 167.6 18.1997L201.733 52.1997C204.869 55.3288 206.642 59.5698 206.667 63.9997V80.5664L200 87.1931V63.9997C199.998 61.6898 199.196 59.4518 197.731 57.6659L197.067 56.9331L162.933 22.9331C161.06 21.0572 158.518 20.0021 155.867 19.9997H53.3334C49.7972 19.9997 46.4058 21.4045 43.9053 23.905C41.4048 26.4055 40 29.7969 40 33.3331V87.1997L33.3334 80.5731V33.3331C33.3335 28.2322 35.2825 23.324 38.7818 19.6126C42.2811 15.9012 47.0661 13.667 52.1582 13.3671L53.3334 13.3331H155.867Z" fill="#19B3B8"/><path opacity="0.1" d="M155.867 20C158.518 20.0023 161.06 21.0574 162.933 22.9333L197.067 56.9333C198.943 58.8069 199.998 61.3487 200 64V87.1933L180.397 106.682C178.893 108.166 177.701 109.936 176.888 111.886C176.076 113.837 175.661 115.93 175.667 118.043C175.673 120.156 176.099 122.247 176.922 124.193C177.745 126.14 178.947 127.903 180.459 129.379L200 148.807V206.667C200 210.203 198.595 213.594 196.095 216.095C193.594 218.595 190.203 220 186.667 220H53.3333C49.7971 220 46.4057 218.595 43.9052 216.095C41.4048 213.594 40 210.203 40 206.667V148.787L59.5835 129.317L60.5243 128.291L60.9569 127.773C63.3607 124.69 64.5448 120.829 64.283 116.929C64.0212 113.028 62.3319 109.361 59.5377 106.627L40 87.2V33.3333C40 29.7971 41.4048 26.4057 43.9052 23.9052C46.4057 21.4048 49.7971 20 53.3333 20H155.867Z" fill="#19B3B8"/><path d="M16.0666 80C15.2705 80.0001 14.4822 80.157 13.7468 80.4618C13.0113 80.7666 12.3432 81.2133 11.7805 81.7764C11.2165 82.3273 10.7686 82.9854 10.4631 83.7121C10.1576 84.4388 10.0007 85.2193 10.0016 86.0076C10.0025 86.796 10.1613 87.5761 10.4685 88.3021C10.7757 89.0281 11.2251 89.6852 11.7903 90.2347L39.7185 117.991L11.7799 145.765C10.9432 146.608 10.3757 147.681 10.1495 148.848C9.92332 150.014 10.0485 151.222 10.5093 152.317C10.97 153.412 11.7456 154.346 12.7377 155C13.7297 155.654 14.8936 155.999 16.0818 155.99C16.8739 155.996 17.6592 155.843 18.3911 155.54C19.123 155.237 19.7866 154.79 20.3427 154.226L52.5333 122.226L53.0689 121.626C53.9637 120.48 54.404 119.044 54.3051 117.593C54.2063 116.142 53.5753 114.778 52.5333 113.764L20.3399 81.7638C19.2052 80.6333 17.6684 79.999 16.0666 80Z" fill="#19B3B8"/><path d="M223.924 80C222.321 79.9992 220.783 80.6346 219.648 81.7667L187.447 113.774C186.882 114.325 186.434 114.983 186.128 115.71C185.823 116.437 185.666 117.218 185.667 118.007C185.667 118.796 185.826 119.576 186.134 120.302C186.441 121.029 186.891 121.686 187.457 122.235L219.649 154.238C220.788 155.368 222.328 156.002 223.932 156C225.537 155.997 227.075 155.36 228.21 154.226C228.774 153.676 229.222 153.018 229.527 152.293C229.833 151.567 229.99 150.788 229.99 150C229.99 149.213 229.833 148.433 229.527 147.708C229.222 146.982 228.774 146.325 228.21 145.775L200.272 118.001L228.21 90.2249C228.774 89.6738 229.222 89.0153 229.528 88.2882C229.833 87.5611 229.99 86.7802 229.989 85.9915C229.987 85.2029 229.828 84.4224 229.521 83.6963C229.213 82.9701 228.763 82.313 228.197 81.7636C227.062 80.6332 225.525 79.9989 223.924 80Z" fill="#19B3B8"/><path d="M81.3157 140C79.1628 139.994 77.0848 139.209 75.4651 137.791C74.6339 137.023 74.0126 136.055 73.6602 134.979C73.3079 133.904 73.2361 132.756 73.4518 131.645C74.5518 125.701 83.9851 118.672 99.3451 112.352C102.04 107.337 104.461 102.181 106.597 96.9049C108.97 91.0341 110.996 85.4928 112.979 79.4782C107.81 67.6975 106.376 55.6421 109.496 50.1087C110.064 49.0987 110.881 48.2516 111.871 47.6488C112.86 47.0461 113.988 46.708 115.146 46.667C122.192 46.667 124.708 53.8008 124.708 60.4796C124.308 68.4387 122.778 76.3005 120.166 83.8293C121.773 86.7494 123.537 89.5803 125.45 92.3099C127.965 95.9389 130.815 99.3245 133.961 102.422C138.686 101.608 143.467 101.171 148.261 101.115C154.234 100.427 160.236 102.138 164.947 105.874C166.074 107.229 166.683 108.94 166.666 110.701C166.674 111.536 166.533 112.364 166.251 113.149C165.453 115.314 163.251 117.898 157.265 117.903C147.967 117.435 139.185 113.485 132.665 106.839C128.702 107.553 124.399 108.536 119.867 109.765C115.778 110.882 111.734 112.148 107.848 113.52C102.4 123.486 91.8418 139.982 81.6404 139.987L81.3157 140ZM77.3801 132.425C77.352 132.582 77.3401 132.741 77.3449 132.901C77.3481 133.528 77.5956 134.129 78.0349 134.577C78.4742 135.024 79.0706 135.283 79.6977 135.298C83.4144 135.296 89.5367 128.839 95.911 118.343C85.1205 123.332 78.0696 128.669 77.3801 132.425ZM151.621 113C152.331 113.173 153.059 113.26 153.79 113.262C156.344 113.262 158.211 112.075 158.546 110.244C159.104 107.279 156.82 106.141 154.809 105.707C149.185 104.907 143.472 104.981 137.871 105.927C141.886 109.255 146.578 111.669 151.621 113ZM114.527 99.4623C113.402 102.26 112.048 105.276 110.581 108.251C113.387 107.336 116.117 106.525 118.858 105.783C122.328 104.826 125.765 103.997 129.082 103.322L128.719 102.891C126.372 100.322 124.195 97.6024 122.202 94.75C120.908 92.9037 119.675 91.0157 118.46 88.9681C117.363 92.1817 116.069 95.6286 114.527 99.4623ZM112.944 52.2111C111.074 59.2813 111.746 66.7837 114.844 73.4087C116.551 67.8068 117.578 62.02 117.904 56.1729C117.904 53.7409 117.401 50.8069 115.068 50.799C114.684 50.8174 114.308 50.9239 113.972 51.1103C113.635 51.2966 113.345 51.5578 113.125 51.8738L112.944 52.2111Z" fill="#19B3B8"/><path d="M170 160C170.884 160 171.732 160.351 172.357 160.976C172.982 161.601 173.333 162.449 173.333 163.333C173.333 164.217 172.982 165.065 172.357 165.69C171.732 166.315 170.884 166.667 170 166.667H76.6666C75.7826 166.667 74.9347 166.315 74.3096 165.69C73.6845 165.065 73.3333 164.217 73.3333 163.333C73.3333 162.449 73.6845 161.601 74.3096 160.976C74.9347 160.351 75.7826 160 76.6666 160H170Z" fill="#19B3B8"/><path d="M170 180C170.884 180 171.732 180.351 172.357 180.976C172.982 181.601 173.333 182.449 173.333 183.333C173.333 184.217 172.982 185.065 172.357 185.69C171.732 186.315 170.884 186.667 170 186.667H76.6666C75.7826 186.667 74.9347 186.315 74.3096 185.69C73.6845 185.065 73.3333 184.217 73.3333 183.333C73.3333 182.449 73.6845 181.601 74.3096 180.976C74.9347 180.351 75.7826 180 76.6666 180H170Z" fill="#19B3B8"/></svg>',
  UPLOAD_ICON: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 33"><g clip-path="url(#a)"><path fill="#fff" d="M32.077 19.164a6.87 6.87 0 0 1-2.027 4.893 6.877 6.877 0 0 1-4.893 2.026h-1.05a1.198 1.198 0 0 1 0-2.396h1.05c1.208 0 2.344-.47 3.199-1.325a4.49 4.49 0 0 0 1.325-3.198 4.463 4.463 0 0 0-1.245-3.102 4.521 4.521 0 0 0-3.038-1.392 1.2 1.2 0 0 1-.998-1.75c.2-.385.355-.782.458-1.18.11-.414.165-.84.165-1.264A5.31 5.31 0 0 0 23.459 6.7c-1.93-1.928-5.265-2.035-7.296-.225a5.374 5.374 0 0 0-1.747 3.31 1.197 1.197 0 0 1-1.685.936 4.268 4.268 0 0 0-.825-.28 4.077 4.077 0 0 0-3.75 1.057 3.831 3.831 0 0 0-1.091 3.556c.055.253.138.504.244.744A1.198 1.198 0 0 1 6.29 17.48a3.127 3.127 0 0 0-2.072.968 3.076 3.076 0 0 0-.847 2.123c0 .833.325 1.616.914 2.205a3.098 3.098 0 0 0 2.203.912h3.354a1.198 1.198 0 0 1 0 2.396H6.488a5.476 5.476 0 0 1-3.897-1.614 5.475 5.475 0 0 1-1.615-3.9c0-1.41.534-2.749 1.503-3.772a5.511 5.511 0 0 1 2.208-1.421 6.208 6.208 0 0 1 1.795-5.595 6.47 6.47 0 0 1 5.872-1.697 7.766 7.766 0 0 1 2.215-3.398 7.674 7.674 0 0 1 5.113-1.948 7.69 7.69 0 0 1 5.471 2.266 7.69 7.69 0 0 1 2.266 5.471 7.345 7.345 0 0 1-.3 2.073 6.91 6.91 0 0 1 3.048 1.856 6.85 6.85 0 0 1 1.91 4.759Z"/><path fill="#fff" d="m22.677 17.815-4.796-4.787a1.198 1.198 0 0 0-1.693 0L11.4 17.816a1.198 1.198 0 1 0 1.694 1.694l2.75-2.751v13.07a1.198 1.198 0 0 0 2.396 0V16.772l2.744 2.739a1.199 1.199 0 0 0 1.692-1.696Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.55.528h31.943v31.943H.55z"/></clipPath></defs></svg>',
  SECURITY_ICON: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><g fill="none" fill-rule="evenodd"><path fill="#8E8E8E" fill-rule="nonzero" d="M21.5006559,6 L33.9986881,10.1630417 L34,20.1773333 C34,27.8265833 28.9100068,34.6259167 21.5006559,37 C14.123138,34.6858984 9.16213086,28.0099101 9.00389527,20.4144132 L9,20.0520417 L9,10.165625 L21.5006559,6 Z M21.4999997,7.581 L10.4999997,11.246 L10.4999997,20.0510254 C10.5046599,26.9292654 14.8030505,33.0037194 21.2726644,35.3404771 L21.496,35.418 L21.7168055,35.3398823 C28.0480726,33.0130596 32.3496907,27.1255801 32.4961403,20.5253563 L32.4999997,20.1773333 L32.498,11.244 L21.4999997,7.581 Z"></path><path fill="#FA0F00" fill-rule="nonzero" d="M27.705263,16.4844793 C27.9899772,16.1836294 28.4646708,16.1705488 28.7655207,16.455263 C29.0390206,16.7140941 29.0746947,17.1299329 28.8650105,17.4294339 L28.794737,17.5155207 L20.535541,26.2427934 C20.2781341,26.5147885 19.8650957,26.5517706 19.5656859,26.3452708 L19.4795411,26.2760079 L15.7387371,22.7906577 C15.4356791,22.508295 15.4189022,22.0337178 15.7012648,21.7306597 C15.9579582,21.4551524 16.3735066,21.416241 16.6746314,21.6235864 L16.7612629,21.6931874 L19.957,24.671 L27.705263,16.4844793 Z"></path></g></svg>',
  INFO_ICON_MOBILE: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346625 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0ZM7.85 2.15C8.03902 2.13953 8.22813 2.16869 8.4052 2.23561C8.58228 2.30253 8.74341 2.40574 8.87825 2.5386C9.01309 2.67147 9.11867 2.83105 9.1882 3.00712C9.25773 3.18319 9.28968 3.37185 9.282 3.561C9.29702 3.75292 9.27029 3.94582 9.20365 4.12643C9.13701 4.30703 9.03205 4.47106 8.89597 4.60723C8.75989 4.74341 8.59594 4.84849 8.41538 4.91525C8.23482 4.98202 8.04194 5.00888 7.85 4.994C7.65886 5.00554 7.46744 4.97637 7.2884 4.90842C7.10937 4.84047 6.9468 4.73529 6.81144 4.59984C6.67608 4.46439 6.57102 4.30174 6.50319 4.12266C6.43537 3.94358 6.40633 3.75214 6.418 3.561C6.41033 3.37185 6.44228 3.18319 6.51181 3.00712C6.58134 2.83105 6.68691 2.67147 6.82175 2.5386C6.9566 2.40574 7.11773 2.30253 7.2948 2.23561C7.47188 2.16869 7.66099 2.13953 7.85 2.15ZM10 12.5C10 12.6326 9.94733 12.7598 9.85356 12.8536C9.75979 12.9473 9.63261 13 9.5 13H6.5C6.3674 13 6.24022 12.9473 6.14645 12.8536C6.05268 12.7598 6 12.6326 6 12.5V11.5C6 11.3674 6.05268 11.2402 6.14645 11.1464C6.24022 11.0527 6.3674 11 6.5 11H7V8H6.5C6.3674 8 6.24022 7.94732 6.14645 7.85355C6.05268 7.75979 6 7.63261 6 7.5V6.5C6 6.36739 6.05268 6.24021 6.14645 6.14645C6.24022 6.05268 6.3674 6 6.5 6H8.5C8.63261 6 8.75979 6.05268 8.85356 6.14645C8.94733 6.24021 9 6.36739 9 6.5V11H9.5C9.63261 11 9.75979 11.0527 9.85356 11.1464C9.94733 11.2402 10 11.3674 10 11.5V12.5Z" fill="#6D6D6D"/></svg>',
  INFO_ICON: '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.50005 7.0748C10.0938 7.0748 10.575 6.59351 10.575 5.9998C10.575 5.4061 10.0938 4.9248 9.50005 4.9248C8.90634 4.9248 8.42505 5.4061 8.42505 5.9998C8.42505 6.59351 8.90634 7.0748 9.50005 7.0748Z" fill="#222222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.667 12H10.5V8.2C10.5 8.14696 10.4789 8.09609 10.4414 8.05858C10.4039 8.02107 10.353 8 10.3 8H8.333C8.333 8 7.75 8.016 7.75 8.5C7.75 8.984 8.333 9 8.333 9H8.5V12H8.333C8.333 12 7.75 12.016 7.75 12.5C7.75 12.984 8.333 13 8.333 13H10.667C10.667 13 11.25 12.984 11.25 12.5C11.25 12.016 10.667 12 10.667 12Z" fill="#222222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.50005 1.0498C7.92769 1.0498 6.39064 1.51606 5.08327 2.38962C3.7759 3.26318 2.75693 4.5048 2.15521 5.95747C1.55349 7.41014 1.39606 9.00862 1.70281 10.5508C2.00956 12.0929 2.76673 13.5095 3.87855 14.6213C4.99038 15.7331 6.40694 16.4903 7.94908 16.797C9.49123 17.1038 11.0897 16.9464 12.5424 16.3446C13.9951 15.7429 15.2367 14.724 16.1102 13.4166C16.9838 12.1092 17.4501 10.5722 17.4501 8.9998C17.4501 6.89133 16.6125 4.86922 15.1216 3.37831C13.6306 1.88739 11.6085 1.0498 9.50005 1.0498ZM9.50005 15.9558C8.12429 15.9558 6.77941 15.5478 5.63551 14.7835C4.4916 14.0192 3.60003 12.9328 3.07355 11.6618C2.54706 10.3907 2.40931 8.99209 2.67771 7.64276C2.94611 6.29342 3.6086 5.05398 4.58142 4.08117C5.55423 3.10836 6.79367 2.44586 8.143 2.17746C9.49234 1.90906 10.891 2.04682 12.162 2.5733C13.433 3.09978 14.5194 3.99135 15.2838 5.13526C16.0481 6.27917 16.4561 7.62404 16.4561 8.9998C16.4561 10.8447 15.7232 12.6139 14.4187 13.9184C13.1142 15.2229 11.3449 15.9558 9.50005 15.9558Z" fill="#222222"/></svg>',
  CLOSE_ICON: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_15746_2423)"><g clip-path="url(#clip1_15746_2423)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.2381 15.9994L19.6944 13.5434C19.8586 13.3793 19.9509 13.1566 19.9509 12.9245C19.951 12.6923 19.8588 12.4696 19.6946 12.3054C19.5305 12.1412 19.3078 12.0489 19.0757 12.0488C18.8435 12.0488 18.6208 12.141 18.4566 12.3051L16.0002 14.7615L13.5435 12.3051C13.3793 12.141 13.1566 12.0489 12.9245 12.049C12.6923 12.0491 12.4697 12.1414 12.3057 12.3056C12.1416 12.4698 12.0495 12.6925 12.0496 12.9246C12.0497 13.1568 12.142 13.3794 12.3062 13.5434L14.7622 15.9994L12.3062 18.4555C12.1427 18.6197 12.051 18.8421 12.0512 19.0738C12.0515 19.3055 12.1436 19.5277 12.3074 19.6916C12.4711 19.8556 12.6933 19.9478 12.925 19.9482C13.1567 19.9486 13.3791 19.8571 13.5435 19.6938L16.0002 17.2374L18.4566 19.6938C18.6208 19.8579 18.8435 19.9501 19.0756 19.9501C19.3078 19.95 19.5305 19.8577 19.6946 19.6935C19.8588 19.5293 19.9509 19.3066 19.9509 19.0745C19.9509 18.8423 19.8586 18.6196 19.6944 18.4555L17.2381 15.9994Z" fill="white"/></g></g><defs><clipPath id="clip0_15746_2423"><rect width="8" height="8" fill="white" transform="translate(12 12)"/></clipPath><clipPath id="clip1_15746_2423"><rect width="8" height="8" fill="white" transform="translate(12 12)"/></clipPath></defs></svg>',
};

export default function createSvgElement(iconName) {
  const svgString = ICONS[iconName];

  if (!svgString) {
    // eslint-disable-next-line no-console
    console.warn(`Icon not found: ${iconName}`);
    return null;
  }

  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
  const svgElement = svgDoc.documentElement;

  return svgElement;
}
