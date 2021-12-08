//==========================//
//===// Content arrays //===//
//==========================//

// - new items
export const newItems = [
  [
    'Plecak',
    'backpack.gif',
    'Plecak podróżnika, w sam raz na długie wyprawy.'
  ],
  [
    'Klucz',
    'wrench.png',
    'Idealne narzędzie do budowania mechanizmów.'
  ],
];

// - changed craftings
export const craftings = [
  [
    'Pochodnia',
    'torch.gif'
  ],
  [
    'Łańcuch',
    'chain.png'
  ],
  [
    'Recykling łańcucha',
    'chain_recycle.gif'
  ],
  [
    'Magiczna latarnia',
    'beacon.png'
  ],
  [
    'Płaczący obsydian',
    'crying_obsidian.png'
  ],
  [
    'Stół do zaklinania',
    'enchanting_table.png'
  ],
  [
    'Oko Endera',
    'eye_of_ender.png'
  ],
  [
    'Skrzynia Endu',
    'ender_chest.png'
  ],
  [
    'Tarcza',
    'shield.gif'
  ],
  [
    'Suszenie zgniłego mięsa',
    'rotten_flesh_drying.gif'
  ],
  [
    'Dozownik',
    'dispenser.gif'
  ],
  [
    'Zbroja konna',
    'horse_armor.gif'
  ],
  [
    'Kula szlamu',
    'slimeball.png'
  ],
];

// - tutorials with description
export const tutorials = [
  // Backpacks 1
  [
    'Plecak',
    'Plecak, który możesz nosić, umieszczając go w miejscu na tarczę. Możesz go otworzyć lub zamknąć klikając prawym przyciskiem myszy nie będąc w ekipunku.',
    [
      '<b>! Uwaga</b>: Gdy wyrzucisz otwarty plecak zawierający przedmioty, zawartość plecaka i ekwipunku zamienią się miejscami.'
    ],
  ],
  // Wrench 2
  [
    'Klucz',
    'Klucz, dzięki niemu możesz obrócić, np. tłok lub lej bez wcześniejszego niszczenia i ponownego postawienia.',
    [
      '<b>! Uwaga</b>: Bloki mające ekiwpunek muszą być puste, aby je obrócić.'
    ],
  ],
  // Graves 3
  [
    'Nagrobki',
    'Gdy zginiesz, na czacie pojawi się lokalizacja wygenerowanego nagrobka, który tylko ty możesz otworzyć i zebrać swoje przedmioty. Jedyne, co tracisz to punkty doświadczenia.',
    [
      '<b>! Uwaga</b>: Trzymając przycisk SHIFT, otwierając nagrobek, blokujesz przedmioty tak, że tylko ty możesz je podnieść.',
      '<b>! Uwaga</b>: Jeżeli zgubisz wiadomość z lokalizacją nagrobka, możesz użyć komendy <i>/nagrobek</i> lub <i>/grave</i>.',
    ],
  ],
  // Heads 4
  [
    'Głowy',
    'Gdy umrzesz z rąk gracza wypadnie z Ciebie głowa.'
  ],
  // Shield 5
  [
    'Tarcza',
    'Prócz zmienionego craftingu, podczas blokowania obrażeń, dostajesz efekt głodu na krótki czas.',
    [
      '<b>! Uwaga</b>: Blokowanie strzał nie daje tego efektu.'
    ],
  ],
  // Iron farm 6
  [
    'Farma żelaza',
    'Zmniejszyliśmy ilość wypadanego żelaza z golema.',
    [
      '<b>! Uwaga</b>: W momencie, gdy gracz zabije golema, wypada z niego domyślna ilość żelaza.'
    ],
  ],
  // Brewery 7
  [
    'Brewery',
    'Ciekawy plugin, który daje możliwosć produkcji własnego alkoholu.',
    [
      '<b>! Uwaga</b>: Możesz sprawdzić swój stan upojenia, używając komendy: <i>/stan</i> lub <i>/condition</i>, usunąć etykietę alkoholu: <i>/usun_etykiete</i> lub <i></i>/remove_label</i>.'
    ]
  ],
  // EssentialsDiscord 8
  [
    'EssentialsDiscord',
    'Dodaliśmy możliwość komunikacji między serwerem a discordem.',
    [
      '<b>! Tekstowy</b>: ⛏ kpadew ⛏'
    ]
  ],
  // Essentials 9
  [
    'Essentials',
    'M.in. prywatne wiadomości na serwerze.',
    [
      '<b>! Uwaga</b>: Teleportowanie zostało wyłączone.'
    ]
  ],
  // Chairs 10
  [
    'Krzesła',
    'Dodaliśmy możliwość tworzenia krzeseł.',
    [
      '<b>! Uwaga</b>: Aby utworzyć krzesło, połóż schodek z tabliczkami na krawędziach lub z schodkami narożnymi. Długość dowolna.'
    ]
  ],
  // LogBlock 11
  [
    'LogBlock',
    'Pomocny plugin na sprawdzenie historii akcji danego bloku, w tym wkładanie i wyciąganie przedmiotów ze skrzynek.',
    [
      '<b>! Uwaga</b>: Narzędzie otrzymasz, używając komendy: <i>/logblock</i>.'
    ]
  ],
  // MarriageMaster 12
  [
    'Marriage Master',
    'Możesz wziąć ślub, jeżeli będzie taka chęć prosimy o kontakt z księdzem.',
    [
      '<b>! Uwaga</b>: Kontakt możliwy poprzez czat.',
      '<b>! Uwaga</b>: Możesz sprawdzić dostępnych księży pod komendą <i>/ksiadz</i> lub <i>/priest</i>.'
    ]
  ],
  // PlayTime 13
  [
    'PlayTime',
    'Jeśli jesteś ciekawa/y, jaki czas spędziłaś/eś u nas na serwerze lub jesteś ciekawa/y, jaka jest topka graczy z najdłuższym czasem gry.',
    [
      '<b>! Uwaga</b>: Aby sprawdzić swój czas możesz użyć komendy: <i>/time</i> lub <i>/czas</i>, oraz sprawdzić topkę graczy pod komendą <i>/top</i>.'
    ]
  ],
  // SkinsRestorer 14
  [
    'SkinsRestorer',
    'Osoby, nie posiadające konta premium, nie muszą czuć się pokrzywdzone, ponieważ jest możliwość ustawienia sobie jakiegokolwiek skina.',
    [
      '<b>! Uwaga</b>: Aby ustawić skina użyj komendy <i>/skin (link do grafiki skina)</i>.',
      '<b>! Uwaga</b>: Zalecamy używać strony <a href="https://www.minecraftskins.com/" target="_blank" title="SKINDEX"><i class="fas fa-external-link-alt btn btn--icon btn--icon--rounded btn--link tutorials__link"></i></a>.',
      '<b>! Uwaga</b>: Aby zresetować skina użyj komendy <i>/skin clear</i>.'
    ],
  ],
  // StackMob 15
  [
    'StackMob',
    'Aby duże skupiska mobów nie lagowały serwera, wprowadziliśmy system łączenia ich.',
    [
      '<b>! Uwaga</b>: Wszystkie funkcjonalności są zachowane, m.in. rozmnażanie zwierząt.'
    ],
  ],
  // XPKeeper 16
  [
    'XP Keeper',
    'Jeżeli masz dużą ilość punktów doświadczenia, możesz je odłożyć do tabliczki.',
    [
      '<b>! Uwaga</b>: Pierwszy wiersz tabliczki: "[XP]".',
      '<b>! Uwaga</b>: Możesz podarować punkty doświadczenia używając komendy: <i>/podaruj_xp [GRACZ] [ILOŚĆ]</i> lub <i>/gift_xp [GRACZ] [ILOŚĆ]</i>.',
      '<b>! Uwaga</b>: Aby usunąć tabliczkę użyj komendy: <i>/usun</i> lub <i>/remove</i>.'
    ]
  ],
];

// - rules
export const rules = [
  [
    'Ogólne zasady panujące na serwerze:',
    [
      'Wraz z dołączeniem na serwer, akceptujesz regulamin.',
      'Karą za łamanie, uchylanie się od regulaminu - ban lub wyrzucenie z serwera.',
      'Administracja ma prawo karać za czyny nie uwzględnione w regulaminie, które działają na szkodę serwera.',
      'Nieznajomość regulaminu nie zwalnia z jego przestrzegania.',
    ],
  ],
  [
    'Zasady panujące na serwerze:',
    [
      'Każda osoba, która wchodzi na serwer ma obowiązek przeczytać zasady ogólne.',
      'Administracja nie przywraca utraconych przedmiotów w razie ich straty.',
      'Zakaz używania programów wspomagających, cheatów.',
      'Zakaz wykorzystywania bugów gry.',
      'Handel z graczami odbywa się na własne ryzyko.',
      'Konflikty między graczami są rozsztrzygane przez sąd serwerowy.',
      'Każdy jest równy sobie.',
    ],
  ],
  [
    'Obowiązki:',
    [
      'Obowiązkiem każdego jest przestrzeganie regulaminu.',
      'Każdy gracz wiedzący o istnieniu błędu gry ma obowiązek zgłosić to natychmiast do członka administracji poprzez messenger serwera lub discord serwera.',
      'Każdy gracz ma obowiązek wykonywać polecenia administracji.',
      'Każdy, kto widzi osobę łamiącą/nadużywającą regulamin ma obowiązek zgłoszenia administracji w trakcie gry.',
    ],
  ],
];
