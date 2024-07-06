<template>
    <div :class="[darkMode, 'h-dvh']">
        <div :class="[divBgColor]">
            <div :class="['ml-5']">
                <svg @click="toggleMode" viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor"
                    :class="[svgSize, svgFillColor]">
                    <path v-show="darkMode === 'dark'"
                        d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
                    <path v-show="darkMode === ''"
                        d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
            </div>
            <div :class="['ml-5']">
                <svg @click="toggleDragon" viewBox="0 0 640 512" stroke-width="1.5" stroke="currentColor"
                    :class="[svgSize, svgFillColor]">
                    <path v-show="makeFancy"
                        d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
                    <path v-show="!makeFancy"
                        d="M352 124.5l-51.9-13c-6.5-1.6-11.3-7.1-12-13.8s2.8-13.1 8.7-16.1l40.8-20.4L294.4 28.8c-5.5-4.1-7.8-11.3-5.6-17.9S297.1 0 304 0H416h32 16c30.2 0 58.7 14.2 76.8 38.4l57.6 76.8c6.2 8.3 9.6 18.4 9.6 28.8c0 26.5-21.5 48-48 48H538.5c-17 0-33.3-6.7-45.3-18.7L480 160H448v21.5c0 24.8 12.8 47.9 33.8 61.1l106.6 66.6c32.1 20.1 51.6 55.2 51.6 93.1C640 462.9 590.9 512 530.2 512H496 432 32.3c-3.3 0-6.6-.4-9.6-1.4C13.5 507.8 6 501 2.4 492.1C1 488.7 .2 485.2 0 481.4c-.2-3.7 .3-7.3 1.3-10.7c2.8-9.2 9.6-16.7 18.6-20.4c3-1.2 6.2-2 9.5-2.2L433.3 412c8.3-.7 14.7-7.7 14.7-16.1c0-4.3-1.7-8.4-4.7-11.4l-44.4-44.4c-30-30-46.9-70.7-46.9-113.1V181.5v-57zM512 72.3c0-.1 0-.2 0-.3s0-.2 0-.3v.6zm-1.3 7.4L464.3 68.1c-.2 1.3-.3 2.6-.3 3.9c0 13.3 10.7 24 24 24c10.6 0 19.5-6.8 22.7-16.3zM130.9 116.5c16.3-14.5 40.4-16.2 58.5-4.1l130.6 87V227c0 32.8 8.4 64.8 24 93H112c-6.7 0-12.7-4.2-15-10.4s-.5-13.3 4.6-17.7L171 232.3 18.4 255.8c-7 1.1-13.9-2.6-16.9-9s-1.5-14.1 3.8-18.8L130.9 116.5z" />
                </svg>
            </div>
        </div>

        <canvas id="c" v-show="makeFancy" style="position: absolute;"></canvas>
        <div :class="[divBgColor, 'h-dvh', 'h-max']">

            <div :class="[divPaddingTop20]">
                <!-- Name,Surname, etc.. -->
                <div :class="[divBgColor]">
                    <p :class="[textColor, font, fontWeight4, textAlign1, textSize8]">
                        KEREM CAN
                    </p>
                </div>
                <div :class="[divBgColor]">
                    <p :class="[textColor, font, fontWeight9, textAlign1, textSize11]">
                        OZKUL
                    </p>
                </div>
                <div :class="[divBgColor, divMarginTop2, divMarginBottom5]">
                    <p :class="[textColor, font, fontWeight4, textAlign1, textSize4]">
                        SOFTWARE DEVELOPER
                    </p>
                </div>
                <!-- Contact -->
                <div :class="[divBgColor1, divMarginAll5, divPaddingAll5]">
                    <div class="grid gap-3 justify-items-start grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
                        <div class="flex items-center">
                            <svg viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor"
                                :class="[svgSize, svgFillColor]">
                                <path
                                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                            <p :class="[textColor1, font, fontWeight4, textSize1, wordBreak1]">
                                Sakarya/TURKEY
                            </p>
                        </div>
                        <div class="flex items-center">
                            <svg viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor"
                                :class="[svgSize, svgFillColor]">
                                <path
                                    d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                            </svg>
                            <p :class="[textColor1, font, fontWeight4, textSize1, wordBreak1]">
                                09.10.1996
                            </p>
                        </div>
                        <div class="flex items-center">
                            <svg viewBox="0 0 640 512" stroke-width="1.5" stroke="currentColor"
                                :class="[svgSize, svgFillColor]">
                                <path
                                    d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z" />
                            </svg>
                            <p :class="[textColor1, font, fontWeight4, textSize1, wordBreak1]">
                                Master(Computer Engineering)
                            </p>
                        </div>
                        <div class="flex items-center">
                            <svg viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor"
                                :class="[svgSize, svgFillColor]">
                                <path
                                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                            </svg>
                            <a :class="[textColor1, font, fontWeight4, textSize1, wordBreak1]" href="tel:+905383223440">
                                +90 (538) 322 3440
                            </a>
                        </div>
                        <div class="flex items-center">
                            <svg viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor"
                                :class="[svgSize, svgFillColor]">
                                <path
                                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                            <a :class="[textColor1, font, fontWeight4, textAlign1, textSize1, wordBreak1]"
                                href="mailto:keremcan.ozkul@gmail.com">
                                keremcan.ozkul@gmail.com
                            </a>
                        </div>
                        <div class="flex items-center">
                            <svg viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor"
                                :class="[svgSize, svgFillColor]">
                                <path
                                    d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                            </svg>
                            <a :class="[textColor1, font, fontWeight4, textAlign1, textSize1, wordBreak1]"
                                href="https://ozkulkerem.github.io/CVSiteUI/" target="_blank" rel="noreferrer noopener">
                                https://ozkulkerem.github.io/CVSiteUI/
                            </a>
                        </div>
                        <div class="flex items-center">
                            <svg :class="[svgSize, svgFillColor]" viewBox="0 0 512 512" stroke="currentColor"
                                stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                            <a :class="[textColor1, font, fontWeight4, textSize1, wordBreak1]"
                                href="https://github.com/ozkulkerem" target="_blank" rel="noreferrer noopener">
                                github.com/ozkulkerem
                            </a>
                        </div>
                        <div class="flex items-center">
                            <svg viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor"
                                :class="[svgSize, svgFillColor]">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>

                            <a :class="[textColor1, font, fontWeight4, textSize1, wordBreak1]"
                                href="https://linkedin.com/in/kerem-can-ozkul/" target="_blank"
                                rel="noreferrer noopener">
                                linkedin.com/in/kerem-can-ozkul/
                            </a>
                        </div>
                        <div class="flex items-center">
                            <svg viewBox="0 0 640 512" stroke-width="1.5" stroke="currentColor"
                                :class="[svgSize, svgFillColor]">
                                <path
                                    d="M416 176c0 97.2-93.1 176-208 176c-38.2 0-73.9-8.7-104.7-23.9c-7.5 4-16 7.9-25.2 11.4C59.8 346.4 37.8 352 16 352c-6.9 0-13.1-4.5-15.2-11.1s.2-13.8 5.8-17.9l0 0 0 0 .2-.2c.2-.2 .6-.4 1.1-.8c1-.8 2.5-2 4.3-3.7c3.6-3.3 8.5-8.1 13.3-14.3c5.5-7 10.7-15.4 14.2-24.7C14.7 250.3 0 214.6 0 176C0 78.8 93.1 0 208 0S416 78.8 416 176zM231.5 383C348.9 372.9 448 288.3 448 176c0-5.2-.2-10.4-.6-15.5C555.1 167.1 640 243.2 640 336c0 38.6-14.7 74.3-39.6 103.4c3.5 9.4 8.7 17.7 14.2 24.7c4.8 6.2 9.7 11 13.3 14.3c1.8 1.6 3.3 2.9 4.3 3.7c.5 .4 .9 .7 1.1 .8l.2 .2 0 0 0 0c5.6 4.1 7.9 11.3 5.8 17.9c-2.1 6.6-8.3 11.1-15.2 11.1c-21.8 0-43.8-5.6-62.1-12.5c-9.2-3.5-17.8-7.4-25.2-11.4C505.9 503.3 470.2 512 432 512c-95.6 0-176.2-54.6-200.5-129zM228 72c0-11-9-20-20-20s-20 9-20 20V86c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V280c0 11 9 20 20 20s20-9 20-20V266.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V72z" />
                            </svg>

                            <a :class="[textColor1, font, fontWeight4, textSize1, wordBreak1]"
                                href="https://freelancer.com/u/keremcanozkul/" target="_blank"
                                rel="noreferrer noopener">
                                freelancer.com/u/keremcanozkul
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Main cv  -->
                <div :class="[divBgColor, divMarginAll5, divPaddingAll5]">
                    <div class="grid grid-cols-11">
                        <!-- Work Exp  -->
                        <div class="col-span-full sm:col-span-7 md:col-span-6">
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize5]">
                                    WORK EXPERIENCE
                                </p>
                            </div>
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize2, divPaddingTop5]">
                                    Onlinetherapia LTD ŞTİ. / 2022 - Present
                                </p>
                                <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                    Software Developer (Co-Founder)
                                </p>
                                <a :class="[textColor, font, fontWeight5, textAlign4, textSize1]"
                                    href="https://dilvekonusmaterapim.com/" target="_blank" rel="noreferrer noopener">
                                    dilvekonusmaterapim.com
                                </a>
                                <p :class="[textColor, font, fontWeight5, textAlign4, textSize1, divPaddingTop3]">
                                    Onlinetherapia is a software company that has received Tübitak 1512 support and has
                                    developed a customized video therapy platform in the field of language and speech
                                    therapy. The company has 3 founding partners. As one of them, I took an active role
                                    in
                                    the entire process of the company, from the idea stage to the product stage.
                                    We use PHP, .Net Core and Node.js on the product Cloud side and Vue.js on the UI
                                    side.
                                    We
                                    developed an interactive video conferencing system using WebSockets and WebRTC.
                                    If I had to summarize this process:
                                <div>
                                    <ul class="list-disc pl-5">
                                        <li>Creation of business idea and business model</li>
                                        <li>Projecting the business idea</li>
                                        <li>Separating the business idea into packages and determining acceptance
                                            criteria
                                        </li>
                                        <li>Determining the technologies to be used</li>
                                        <li>Determining the database tables to be used</li>
                                        <li>Coding of packages with appropriate technologies and testing processes</li>
                                        <li>Code bug fix</li>
                                        <li>Code review</li>
                                        <li>Taking the project live</li>
                                    </ul>
                                </div>

                                The software development of this developed product has been completed and its sale is
                                being carried out.
                                </p>
                            </div>
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize2, divPaddingTop5]">
                                    Emcompatibility LTD ŞTİ. / 2021 - 2022
                                </p>
                                <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                    Software Developer
                                </p>
                                <p :class="[textColor, font, fontWeight5, textAlign4, textSize1, divPaddingTop3]">
                                    I worked as a software development specialist in this company for a year. Our main
                                    product is electromagnetic engine simulation that can be used on desktop and web
                                    systems. Node.js and Vue.js were used on the cloud side of the product.
                                    ​
                                </p>
                            </div>
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize2, divPaddingTop5]">
                                    Arktekplus / 2018 - 2021
                                </p>
                                <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                    Software Developer
                                </p>
                                <p :class="[textColor, font, fontWeight5, textAlign4, textSize1, divPaddingTop3]">
                                    Over a span of 3 years at a company, I specialized in crafting desktop and cloud
                                    software. The projects primarily centered on remotely managing electronic circuits
                                    through MQTT and WSS protocols. By utilizing C#, I developed desktop apps, while
                                    cloud
                                    systems were implemented using Node.js and .NET Core. This involved shaping MQTT/WSS
                                    protocols, constructing C# desktop apps, and architecting cloud systems via Node.js
                                    and
                                    .NET Core.
                                </p>
                            </div>
                            <div :class="[divBgColor, divMarginTop10]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize5]">
                                    PROJECTS
                                </p>
                            </div>
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize2, divPaddingTop5]">
                                    Easy CV Creation Platform
                                </p>
                                <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                    Techs: .Net Core, Node.js, Vue.js, MySQL, Microservis, Docker,
                                </p>
                                <p :class="[textColor, font, fontWeight5, textAlign4, textSize1, divPaddingTop3]">
                                    The Easy CV Creation Platform is an open-source software project. This platform
                                    allows
                                    you to easily create CVs and build your website. Among the technologies we plan to
                                    use
                                    in developing the project are Vue.js for the frontend, .NET Core (ABP Framework) for
                                    the
                                    backend built on a microservices architecture, and Node.js. I will upload the
                                    project
                                    step by step to GitHub and ultimately prepare comprehensive documentation.
                                </p>
                            </div>
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize2, divPaddingTop5]">
                                    Customized Interactive Video Call Platform for Speech and Language Therapy
                                </p>
                                <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                    Techs: PHP, .Net Core, Node.js, Vue.js, MySQL, WebRTC, WebSocket
                                </p>
                                <p :class="[textColor, font, fontWeight5, textAlign4, textSize1, divPaddingTop3]">
                                    The Customized Interactive Video Call Platform for Speech and Language Therapy is a
                                    project successfully completed with TÜBİTAK BIGG support. This platform provides
                                    specialized interactive tools for speech and language therapy through a video call
                                    platform. The company is managed by three co-founders, and I am one of these
                                    co-founders. I actively participated in every stage of the project. The system
                                    includes
                                    various interactive tools, a voice detection system, and an assignment system that
                                    can
                                    be used during sessions along with the video call tool. This project involves
                                    detailed
                                    work that requires the effective integration of various technologies. The
                                    technologies
                                    used include PHP, .NET Core, Node.js, Vue.js, MySQL, WebRTC, and WebSocket.
                                </p>
                            </div>
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize2, divPaddingTop5]">
                                    Press Machine Control Software
                                </p>
                                <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                    Techs: C#, Modbus, SerialPort Comminication
                                </p>
                                <p :class="[textColor, font, fontWeight5, textAlign4, textSize1, divPaddingTop3]">
                                    The Press Machine Control Software includes software for a press machine that
                                    provides
                                    feedback. This desktop program communicates with the servo drive in the machine
                                    using
                                    the Modbus protocol and provides graphical feedback on the strength of the pressed
                                    part.
                                </p>
                            </div>
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize2, divPaddingTop5]">
                                    Sakarya Chamber of Commerce Meeting Organization Software
                                </p>
                                <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                    Techs: Node.js, MySQL, Vue.js, Flutter
                                </p>
                                <p :class="[textColor, font, fontWeight5, textAlign4, textSize1, divPaddingTop3]">
                                    The Sakarya Chamber of Commerce Meeting Organization Software is a project that
                                    includes
                                    mobile application and backend components. This system is a platform where chamber
                                    members are registered, and individuals to be visited weekly are randomly selected
                                    and
                                    managed via the mobile application.
                                </p>
                            </div>
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize2, divPaddingTop5]">
                                    Real-time Broker Communication Software
                                </p>
                                <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                    Techs: Node.js, WebSocket
                                </p>
                                <p :class="[textColor, font, fontWeight5, textAlign4, textSize1, divPaddingTop3]">
                                    This software manages stock exchange transactions, receives data via webhook from a
                                    system, and distributes this data to clients via sockets. Only Node.js, WebSocket,
                                    and
                                    Express libraries are used on the backend.
                                </p>
                            </div>
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize2, divPaddingTop5]">
                                    Security Sensors Data Collection Software
                                </p>
                                <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                    Techs: Node.js, React.js
                                </p>
                                <p :class="[textColor, font, fontWeight5, textAlign4, textSize1, divPaddingTop3]">
                                    The Security Sensors Data Collection Software enables the registration of sensors in
                                    the
                                    system and is a web platform for collecting data from security sensors using their
                                    sensor codes. The system also facilitates communication between sensors based on
                                    predefined relationships. React.js is used on the frontend, and Node.js is used on
                                    the
                                    backend.
                                </p>
                            </div>
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize2, divPaddingTop5]">
                                    Electromagnetic Field Simulation Software for Electric Motors
                                </p>
                                <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                    Techs: MATLAB, C++, .Net Core, Vue.js
                                </p>
                                <p :class="[textColor, font, fontWeight5, textAlign4, textSize1, divPaddingTop3]">
                                    This project, successfully completed with TÜBİTAK BIGG support, performs
                                    electromagnetic
                                    field simulation for electric motors and provides a web-based system where you can
                                    remotely control virtual computers. It allows remote management of virtualized
                                    computers
                                    along with a desktop application.
                                </p>
                            </div>
                            <div :class="[divBgColor]">
                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize2, divPaddingTop5]">
                                    Member Management System
                                </p>
                                <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                    Techs: .Net Core, Python Flask, Vue.js
                                </p>
                                <p :class="[textColor, font, fontWeight5, textAlign4, textSize1, divPaddingTop3]">
                                    A system designed to automatically fetch member information from another service at
                                    specified intervals and transfer it to your own system. Vue.js is used for the
                                    frontend,
                                    and .NET Core is used for the backend, ensuring more efficient acquisition and
                                    processing of member information.
                                </p>
                            </div>
                        </div>
                        <div class="col-span-full sm:col-span-1 md:col-span-2">
                        </div>
                        <!-- Education And Skills -->
                        <div class="col-span-full sm:col-span-3">
                            <div class="grid grid-cols-10">
                                <!-- Education -->
                                <div :class="[divBgColor, 'col-span-5 sm:col-span-full']">
                                    <div :class="[divBgColor]">
                                        <p :class="[textColor, font, fontWeight9, textAlign4, textSize5]">
                                            EDUCATION
                                        </p>
                                    </div>
                                    <div :class="[divBgColor, divPaddingTop1]">
                                        <p :class="[textColor, font, fontWeight9, textAlign4, textSize1]">
                                            Sakarya University
                                        </p>
                                        <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                            Computer Engineering (3.0/4)
                                        </p>
                                        <p :class="[textColor, font, fontWeight5, textAlign4, textSize1]">
                                            Master Degree / 2022-Now
                                        </p>
                                    </div>
                                    <div :class="[divBgColor, divPaddingTop1]">
                                        <p :class="[textColor, font, fontWeight9, textAlign4, textSize1]">
                                            Sakarya University
                                        </p>
                                        <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                            Electric And Electronics Engineering
                                        </p>
                                        <p :class="[textColor, font, fontWeight5, textAlign4, textSize1]">
                                            Bachelor's degree / 2014-2020
                                        </p>
                                    </div>
                                </div>
                                <!-- Skills -->
                                <div :class="[divBgColor, 'col-span-5 sm:col-span-full pt-0 sm:pt-5']">
                                    <div :class="[divBgColor]">
                                        <p :class="[textColor, font, fontWeight9, textAlign4, textSize5]">
                                            SKILLS
                                        </p>
                                    </div>
                                    <div :class="[divBgColor, divPaddingTop1]">
                                        <div :class="[divBgColor]">
                                            <p :class="[textColor, font, fontWeight8, textAlign4, textSize1]">
                                                Backend
                                            </p>
                                            <p :class="[textColor, font, fontWeight5, textAlign4, textSize1]">
                                                C#, .Net Core, Node js
                                            </p>
                                        </div>
                                        <div :class="[divBgColor, divPaddingTop1]">
                                            <p :class="[textColor, font, fontWeight8, textAlign4, textSize1]">
                                                Database
                                            </p>
                                            <p :class="[textColor, font, fontWeight5, textAlign4, textSize1]">
                                                MySQL, MsSQL, MongoDB
                                            </p>
                                        </div>
                                        <div :class="[divBgColor, divPaddingTop1]">
                                            <p :class="[textColor, font, fontWeight8, textAlign4, textSize1]">
                                                Protocols
                                            </p>
                                            <p :class="[textColor, font, fontWeight5, textAlign4, textSize1]">
                                                Http, WebSocket, WebRTC, Mqtt, Amqp
                                            </p>
                                        </div>
                                        <div :class="[divBgColor, divPaddingTop1]">
                                            <p :class="[textColor, font, fontWeight8, textAlign4, textSize1]">
                                                Frontend
                                            </p>
                                            <p :class="[textColor, font, fontWeight5, textAlign4, textSize1]">
                                                Html5, Css3, JS, Vue js
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!-- SPEECHES AND PRESS -->
                                <div :class="[divBgColor, 'col-span-5 sm:col-span-full pt-0 sm:pt-5']">

                                    <div :class="[divBgColor]">
                                        <div :class="[divBgColor]">
                                            <p :class="[textColor, font, fontWeight9, textAlign4, textSize5]">
                                                SPEECHES AND PRESS
                                            </p>
                                        </div>
                                        <div :class="[divBgColor, divPaddingTop1]">
                                            <div :class="[divBgColor]">
                                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize1]">
                                                    Teknopark Istanbul / Istanbul Ticaret Gazetesi
                                                </p>
                                                <div :class="[divBgColor, divPaddingTop1]">
                                                    <a :class="[textColor, font, fontWeight5, textAlign4, textSize1]"
                                                        href="https://www.teknoparkistanbul.com.tr/haberler/depremzede-cocuklara-online-dil-terapisi"
                                                        target="_blank" rel="noreferrer noopener">
                                                        Teknopark Istanbul News Link
                                                    </a>
                                                </div>
                                                <div :class="[divBgColor, divPaddingTop1]">
                                                    <a :class="[textColor, font, fontWeight5, textAlign4, textSize1]"
                                                        href="https://istanbulticaretgazetesi.com/tr/depremzede-cocuklara-online-dil-terapisi"
                                                        target="_blank" rel="noreferrer noopener">
                                                        Istanbul Ticaret Gazetesi News Link
                                                    </a>
                                                </div>
                                            </div>
                                            <div :class="[divBgColor, divPaddingTop1]">
                                                <p :class="[textColor, font, fontWeight9, textAlign4, textSize1]">
                                                    Sakarya University
                                                </p>
                                                <div :class="[divBgColor, divPaddingTop1]">
                                                    <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                                        Teknokent Meets with Students
                                                    </p>
                                                </div>
                                                <div :class="[divBgColor, divPaddingTop1]">
                                                    <a :class="[textColor, font, fontWeight5, textAlign4, textSize1]"
                                                        href="https://www.haberturk.com/sakarya-haberleri/75888538-sakarya-teknokent-ogrencilerle-bulustu"
                                                        target="_blank" rel="noreferrer noopener">
                                                        Haberturk News Link
                                                    </a>
                                                </div>
                                                <div :class="[divBgColor, divPaddingTop1]">
                                                    <a :class="[textColor, font, fontWeight5, textAlign4, textSize1]"
                                                        href="https://www.youtube.com/watch?v=3uOGgSvfmPw&ab_channel=Sa%C3%BC%C4%B0ibf_"
                                                        target="_blank" rel="noreferrer noopener">
                                                        Youtube Link
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- AWARD -->
                                <div :class="[divBgColor, 'col-span-5 sm:col-span-full pt-0 sm:pt-5']">
                                    <div :class="[divBgColor]">
                                        <p :class="[textColor, font, fontWeight9, textAlign4, textSize5]">
                                            AWARD
                                        </p>
                                    </div>
                                    <div :class="[divBgColor, divPaddingTop1]">
                                        <div :class="[divBgColor]">
                                            <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                                <!-- Tübitak 1512 - Online dil ve konuşma terapisi platformu -->
                                                Tübitak 1512 - Online language and speech therapy platform
                                            </p>
                                        </div>
                                        <div :class="[divBgColor, divPaddingTop1]">
                                            <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                                <!-- Tübitak 1512 - Motorlar için elektromanyatik simülasyon programı -->
                                                Tübitak 1512 - Electromagnetic simulation program for engines
                                            </p>
                                        </div>
                                        <div :class="[divBgColor, divPaddingTop1]">
                                            <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                                <!-- KOSGEB - Dokunmatik ekran programlama yazılımı -->
                                                KOSGEB - Touchscreen programming softwares
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- LANGUAGES -->
                                <div :class="[divBgColor, 'col-span-5 sm:col-span-full pt-0 sm:pt-5']">
                                    <div :class="[divBgColor]">
                                        <p :class="[textColor, font, fontWeight9, textAlign4, textSize5]">
                                            LANGUAGES
                                        </p>
                                    </div>
                                    <div :class="[divBgColor, divPaddingTop1]">
                                        <div :class="[divBgColor]">
                                            <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                                Turkish - Native
                                            </p>
                                        </div>
                                        <div :class="[divBgColor, divPaddingTop1]">
                                            <p :class="[textColor, font, fontWeight7, textAlign4, textSize1]">
                                                English - (CEFR Level B2)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!-- PUBLICATIONS -->
                                <div :class="[divBgColor, 'col-span-5 sm:col-span-full pt-0 sm:pt-5']">
                                    <div :class="[divBgColor]">
                                        <p :class="[textColor, font, fontWeight9, textAlign4, textSize5]">
                                            PUBLICATIONS
                                        </p>
                                    </div>
                                    <div :class="[divBgColor, divPaddingTop1]">
                                        <div :class="[divBgColor]">
                                            <p :class="[textColor, font, fontWeight8, textAlign4, textSize1]">
                                                Rastgele Sayı Üreteç Testleri İncelemesi
                                            </p>
                                            <div :class="[divBgColor, divPaddingTop1]">
                                                <a :class="[textColor, font, fontWeight5, textAlign4, textSize1]"
                                                    href="https://www.bidgeyayinlari.com.tr/wp-content/uploads/2024/01/Bilgisayar-Bilimleri-ve-Muhendisligi-turkce-1.pdf">
                                                    Bidge Yayınları Book Link
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { dragonAnimation } from './dragon.js';
const darkMode = ref("")
const makeFancy = ref(false)

//Div variables
// const divBgColor = ref("bg-white dark:bg-black");
const divBgColor = ref("bg-white dark:bg-black");
const divBgColor1 = ref("bg-[#D8D7D5] dark:bg-[#21211f]");
// const divBgColor1 = ref("bg-[#D8D7D5] dark:bg-[#D8D7D5]");

const divMarginAll = ref("m-0")
const divMarginAll1 = ref("m-1")
const divMarginAll2 = ref("m-2")
const divMarginAll3 = ref("m-3")
const divMarginAll4 = ref("m-4")
const divMarginAll5 = ref("m-5")
const divMarginAll6 = ref("m-6")
const divMarginAll7 = ref("m-7")
const divMarginAll8 = ref("m-8")

const divMarginTop2 = ref("mt-2")
const divMarginTop5 = ref("mt-5")
const divMarginTop10 = ref("mt-10")

const divMarginBottom2 = ref("mb-2")
const divMarginBottom5 = ref("mb-5")

const divPaddingAll = ref("p-0")
const divPaddingAll1 = ref("p-1")
const divPaddingAll2 = ref("p-2")
const divPaddingAll3 = ref("p-3")
const divPaddingAll4 = ref("p-4")
const divPaddingAll5 = ref("p-5")
const divPaddingAll6 = ref("p-6")
const divPaddingAll7 = ref("p-7")
const divPaddingAll8 = ref("p-8")

const divPaddingTop1 = ref("pt-1")
const divPaddingTop2 = ref("pt-2")
const divPaddingTop3 = ref("pt-3")
const divPaddingTop5 = ref("pt-5")
const divPaddingTop20 = ref("pt-20")
//Text variables
const font = ref("font-roboto");
const font1 = ref("font-openSans");
const font2 = ref("font-montserrat");

const fontWeight = ref("font-thin");
const fontWeight2 = ref("font-extralight");
const fontWeight3 = ref("font-light");
const fontWeight4 = ref("font-normal");
const fontWeight5 = ref("font-medium");
const fontWeight6 = ref("font-semibold");
const fontWeight7 = ref("font-bold");
const fontWeight8 = ref("font-extrabold");
const fontWeight9 = ref("font-black");

const textSize = ref("text-xs");
const textSize1 = ref("text-sm");
const textSize2 = ref("text-base");
const textSize3 = ref("text-lg");
const textSize4 = ref("text-xl");
const textSize5 = ref("text-2xl");
const textSize6 = ref("text-3xl");
const textSize7 = ref("text-4xl");
const textSize8 = ref("text-5xl");
const textSize9 = ref("text-6xl");
const textSize10 = ref("text-7xl");
const textSize11 = ref("text-8xl");
const textSize12 = ref("text-9xl");

const textColor = ref("text-black dark:text-white");
// const textColor = ref("text-[#586CA7] dark:text-white");
const textColor1 = ref("text-[#222E3D] dark:text-white");
// const textColor1 = ref("text-[#222E3D] dark:text-[#222E3D]");

//Text other colors
const textHeaderColor = ref("text-[#0000ff] dark:text-white");
const textLittleHeaderColor = ref("text-[#00a0dd] dark:text-white");
const textLittleTextYellowColor = ref("text-[#795e26] dark:text-white");
const textLittleTextRedColor = ref("text-[#a31515] dark:text-white");


const textAlign = ref("text-left");
const textAlign1 = ref("text-center");
const textAlign2 = ref("text-right");
const textAlign3 = ref("text-justify");
const textAlign4 = ref("text-start");
const textAlign5 = ref("text-end");

const wordBreak = ref("break-normal");
const wordBreak1 = ref("break-all");

//SVG variables
const svgSize = ref("w-6 h-6")
const svgFillColor = ref("fill-black dark:fill-white")
const svgFillColor1 = ref("fill-white dark:fill-dark")
const svgFillColor2 = ref("dark:fill-white")
// const svgFillColor1 = ref("fill-white")

onMounted(() => {
    const loop = dragonAnimation();
    console.log(loop);
})

const toggleMode = () => {
    if (darkMode.value !== 'dark') {
        // Dark mod aktif değilse aktif hale getir.
        darkMode.value = 'dark';
    } else {
        // Dark mod aktifse devre dışı bırak.
        darkMode.value = '';
    }
};
const toggleDragon = () => {
    if (makeFancy.value !== true) {
        // Dark mod aktif değilse aktif hale getir.
        makeFancy.value = true;
    } else {
        // Dark mod aktifse devre dışı bırak.
        makeFancy.value = false;
    }
};

</script>
