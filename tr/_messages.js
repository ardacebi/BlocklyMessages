// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2018 Makeroid. All rights reserved.

/**
 * Visual Blocks Language
 *
 * Copyright © 2018 Makeroid. All rights reserved.
 */

/**
 * @fileoverview Turkish strings.
 */
'use strict';

goog.provide('AI.Blockly.Msg.tr');

goog.require('Blockly.Msg.tr');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

Blockly.Msg.tr.switch_language_to_turkish = {
  // Switch language to Turkish.
  category: '',
  helpUrl: '',
  init: function() {
// Context menus.
    Blockly.Msg.UNDO = 'Geri al';
    Blockly.Msg.REDO = 'Yeniden uygula';
    Blockly.Msg.CLEAN_UP = 'Blokları temizle';
    Blockly.Msg.DUPLICATE_BLOCK = 'Çoğalt';
    Blockly.Msg.REMOVE_COMMENT = 'Yorumu Kaldır';
    Blockly.Msg.ADD_COMMENT = 'Yorum Ekle';
    Blockly.Msg.EXTERNAL_INPUTS = 'Dış Girişler';
    Blockly.Msg.INLINE_INPUTS = 'İç Girişler';
    Blockly.Msg.HORIZONTAL_PARAMETERS = 'Parametreleri Yatay Diz';
    Blockly.Msg.VERTICAL_PARAMETERS = 'Parametreleri Dikey Diz';
    Blockly.Msg.CONFIRM_DELETE = 'Silmeyi Onayla';
    Blockly.Msg.DELETE_ALL_BLOCKS = "Tüm %1 blokları silmeyi onayla?";
    Blockly.Msg.DELETE_BLOCK = 'Bloku Sil';
    Blockly.Msg.DELETE_X_BLOCKS = 'Blokları %1 Sil';
    Blockly.Msg.COLLAPSE_BLOCK = 'Bloku Küçült';
    Blockly.Msg.EXPAND_BLOCK = 'Bloku Genişlet';
    Blockly.Msg.DISABLE_BLOCK = 'Bloku Devre Dışı Bırak';
    Blockly.Msg.ENABLE_BLOCK = 'Bloku Etkinleştir';
    Blockly.Msg.HELP = 'Yardım';
    Blockly.Msg.EXPORT_IMAGE = 'Blokları ekran görüntüsü olarak indir';
    Blockly.Msg.COLLAPSE_ALL = 'Blokları küçült';
    Blockly.Msg.EXPAND_ALL = 'Blokların hepsini genişlet';
    Blockly.Msg.ARRANGE_H = 'Blokları Yatay Diz';
    Blockly.Msg.ARRANGE_V = 'Blokları Dikey Diz';
    Blockly.Msg.ARRANGE_S = 'Blokları Diyagonal Olarak Sırala';
    Blockly.Msg.SORT_W = 'Blokları Genişliklerine Göre Sırala';
    Blockly.Msg.SORT_H = 'Blokları Yüksekliklerine Göre Sırala';
    Blockly.Msg.SORT_C = 'Blokları Kategorilerine Göre Sırala';
    Blockly.Msg.COPY_TO_BACKPACK = 'Sırt çantasına ekle';
    Blockly.Msg.COPY_ALLBLOCKS = 'Tüm blokları sırt çantasına kopyala';
    Blockly.Msg.BACKPACK_GET = 'Tüm blokları sırt çantasından kopyala';
    Blockly.Msg.BACKPACK_EMPTY = 'Sırt çantasını temizle';
    Blockly.Msg.BACKPACK_CONFIRM_EMPTY = 'Sırt çantasını temizlemek istediğinizden emin misiniz?';
    Blockly.Msg.BACKPACK_DOC_TITLE = "Sırt çantası hakkında bilgi";
    Blockly.Msg.SHOW_BACKPACK_DOCUMENTATION = "Sırt Çantası Dökümantasyonunu Göster";
    Blockly.Msg.BACKPACK_DOCUMENTATION = "Sırt çantası, bir kopyala/yapıştır özelliğidir. Blokları bir proje veya ekrandan başka bir proje veya ekrana kopyalayıp yapıştırmanızı sağlar. " +
   " ve başka bir projeye veya ekrana yapıştır. " +
   " Kopyalamak için, blokları sırt çantasına sürükleyip bırakabilirsiniz. Yapıştırmak için, sırt çantasına tıklayın ve " +
   " çalışma alanına istediğiniz bloğu sürükleyip bırakın." +
   "</p><p>Eğer Makeroid'i sırt çantanızda bloklar olarak bırakırsanız " +
   " bir sonraki girişinize kadar onlar orada olacaklar." +
   "</p><p>Detaylı bilgi ve nasıl-yapılır için: " +
   '</p><p><a href="https://docs.makeroid.io/other/backpack.html" target="_blank">https://docs.makeroid.io/other/backpack.html</a>';
    Blockly.Msg.ENABLE_GRID = 'Çalışma masası maşasını etkinleştir';
    Blockly.Msg.DISABLE_GRID = 'Çalışma masası maşasını kapat';
    Blockly.Msg.ENABLE_SNAPPING = 'Enable Snap to Grid';
    Blockly.Msg.DISABLE_SNAPPING = 'Disable Snap to Grid';

// Variable renaming.
    Blockly.MSG_CHANGE_VALUE_TITLE = 'Değeri değiştir:';
    Blockly.MSG_NEW_VARIABLE = 'Yeni değişken...';
    Blockly.MSG_NEW_VARIABLE_TITLE = 'Yeni değişken adı:';
    Blockly.MSG_RENAME_VARIABLE = 'Değişkenin adını değiştir...';
    Blockly.MSG_RENAME_VARIABLE_TITLE = 'Tüm değişkenlerin adını değiştir "%1":';

// Toolbox.
    Blockly.MSG_VARIABLE_CATEGORY = 'Değişkenler';
    Blockly.MSG_PROCEDURE_CATEGORY = 'Prosedürler';

// Warnings/Errors
    Blockly.ERROR_BLOCK_CANNOT_BE_IN_DEFINTION = "This block cannot be in a definition";
    Blockly.ERROR_SELECT_VALID_ITEM_FROM_DROPDOWN = "Select a valid item in the drop down.";
    Blockly.ERROR_DUPLICATE_EVENT_HANDLER = "This is a duplicate event handler for this component.";
    Blockly.ERROR_COMPONENT_DOES_NOT_EXIST = "Bu bileşen yok.";
    Blockly.ERROR_BLOCK_IS_NOT_DEFINED = "This block is not defined. Delete this block!";

// Colour Blocks.
    Blockly.Msg.LANG_COLOUR_PICKER_HELPURL = 'https://docs.makeroid.io/blocks/colors.html#basic';
    Blockly.Msg.LANG_COLOUR_PICKER_TOOLTIP = 'Bir renk seçmek için kareye basın.';
    Blockly.Msg.LANG_COLOUR_WHITE = 'beyaz';
    Blockly.Msg.LANG_COLOUR_LIGHT_GRAY = 'açık gri';
    Blockly.Msg.LANG_COLOUR_GRAY = 'gri';
    Blockly.Msg.LANG_COLOUR_BLUE_GRAY = 'mavi gri';
    Blockly.Msg.LANG_COLOUR_DARK_GRAY = 'koyu gri';
    Blockly.Msg.LANG_COLOUR_BLACK = 'siyah';
    Blockly.Msg.LANG_COLOUR_RED = 'kırmızı';
    Blockly.Msg.LANG_COLOUR_PINK = 'pembe';
    Blockly.Msg.LANG_COLOUR_PURPLE = 'mor';
    Blockly.Msg.LANG_COLOUR_DEEP_PURPLE = 'koyu mor';
    Blockly.Msg.LANG_COLOUR_INDIGO = 'indigo';
    Blockly.Msg.LANG_COLOUR_BLUE = 'mavi';
    Blockly.Msg.LANG_COLOUR_LIGHT_BLUE = 'açık mavi';
    Blockly.Msg.LANG_COLOUR_CYAN = 'cyan';
    Blockly.Msg.LANG_COLOUR_TEAL = 'teal';
    Blockly.Msg.LANG_COLOUR_GREEN = 'yeşil';
    Blockly.Msg.LANG_COLOUR_LIGHT_GREEN = 'açık yeşil';
    Blockly.Msg.LANG_COLOUR_LIME = 'lime';
    Blockly.Msg.LANG_COLOUR_YELLOW = 'sarı';
    Blockly.Msg.LANG_COLOUR_AMBER = 'amber';
    Blockly.Msg.LANG_COLOUR_ORANGE = 'turuncu';
    Blockly.Msg.LANG_COLOUR_DEEP_ORANGE = 'koyu turuncu';
    Blockly.Msg.LANG_COLOUR_BROWN = 'kahverengi';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR = 'rengi böl';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_HELPURL = 'https://docs.makeroid.io/blocks/colors.html#split';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_TOOLTIP = "A list of four elements, each in the range 0 to 255, representing the red, green, blue and alpha components.";
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR = 'rengi oluştur';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL = 'https://docs.makeroid.io/blocks/colors.html#make';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP = "A color with the given red, green, blue, and optionally alpha components";

// Control Blocks
    Blockly.Msg.LANG_CATEGORY_CONTROLS = 'Kontrol';
    Blockly.Msg.LANG_CONTROLS_IF_HELPURL = 'https://docs.makeroid.io/blocks/control.html#if';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements.\n' +
        'Otherwise, do the second block of statements.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements.\n' +
        'Otherwise, if the second value is true, do the second block of statements.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements.\n' +
        'Otherwise, if the second value is true, do the second block of statements.\n' +
        'If none of the values are true, do the last block of statements.';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_IF = 'eğer';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF = 'else if';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSE = 'değilse';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN = 'öyleyse';

    Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF = 'eğer';
    Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP = 'Ekle, kaldır, veya yerlerini değiştir\n' +
        'to reconfigure this if block.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'else if';
    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'else';
    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';

    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'https://docs.makeroid.io/blocks/control.html#while';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT = 'tekrarla';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'yap';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'iken';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'kadar';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_1 = 'Runs the blocks in the \'do\' section while the test is '
        + 'true.';

    Blockly.Msg.LANG_CONTROLS_FOR_HELPURL = '';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_WITH = 'count with';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_FROM = 'from';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_TO = 'to';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_DO = 'do';

    Blockly.Msg.LANG_CONTROLS_FOR_TOOLTIP = 'Count from a start number to an end number.\n' +
        'For each count, set the current count number to\n' +
        'variable "%1", and then do some statements.';

    Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#forrange';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM = 'for each';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR = 'numara';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START = 'from';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END = 'to';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP = 'tarafından';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO = 'yap';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_TEXT = 'for number in range';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_PREFIX = 'for ';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_SUFFIX = ' in range';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP = 'Runs the blocks in the \'do\' section for each numeric '
        + 'value in the range from start to end, stepping the value each time.  Use the given '
        + 'variable name to refer to the current value.';

    Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL = 'https://docs.makeroid.io/blocks/control.html#foreach';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'her bir';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR = 'madde';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'listede';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_TEXT = 'for item in list';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_PREFIX = 'for ';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_SUFFIX = ' in list';
    Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP = 'Runs the blocks in the \'do\'  section for each item in '
        + 'the list.  Use the given variable name to refer to the current list item.';

    Blockly.Msg.LANG_CONTROLS_GET_HELPURL = 'https://docs.makeroid.io/blocks/control.html#get';


    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'of loop';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and\n' +
        'continue with the next iteration.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning:\n' +
        'This block may only\n' +
        'be used within a loop.';

    Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#while';;
    Blockly.Msg.LANG_CONTROLS_WHILE_TITLE = 'süre';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST = 'test';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_WHILE_COLLAPSED_TEXT = 'while';
    Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP = 'Runs the blocks in the \'do\' section while the test is '
        + 'true.';

    Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#choose';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE = 'if'
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST = '';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN = 'then';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN = 'else';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_COLLAPSED_TEXT = 'if';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP = 'If the condition being tested is true,'
        + 'return the result of evaluating the expression attached to the \'then-return\' slot;'
        + 'otherwise return the result of evaluating the expression attached to the \'else-return\' slot;'
        + 'at most one of the return slot expressions will be evaluated.';

    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_HELPURL = 'https://docs.makeroid.io/blocks/control.html#doreturn';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN = 'sonuç';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP = 'Runs the blocks in \'do\' and returns a statement. Useful if you need to run a procedure before returning a value to a variable.';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_COLLAPSED_TEXT = 'yap/sonuç';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE = 'sonuç yap';

    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE = 'değerlendir ancak sonucu yoksay'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#evaluate';
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_COLLAPSED_TEXT = 'eval but ignore'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP = 'Runs the connected block of code and ignores the return value (if any). Useful if need to call a procedure with a return value but don\'t need the value.';

    /* [lyn, 10/14/13] Removed for now. May come back some day.
     Blockly.Msg.LANG_CONTROLS_NOTHING_TITLE = 'nothing';
     Blockly.Msg.LANG_CONTROLS_NOTHING_HELPURL = 'https://docs.makeroid.io/blocks/control.html#nothing';
     Blockly.Msg.LANG_CONTROLS_NOTHING_TOOLTIP = 'Returns nothing. Used to initialize variables or can be plugged into a return socket if no value needed to return. this is equivalent to null or None.';
     */

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL = 'https://docs.makeroid.io/blocks/control.html#openscreen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE = 'başka bir ekran aç';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME = 'ekranAdı';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_COLLAPSED_TEXT = 'ekran aç';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP = 'Opens a new screen in a multiple screen app.';

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#openscreenwithvalue';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE = 'open another screen with start value';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME = 'ekranAdı';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE = 'başlangıçDeğeri';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_COLLAPSED_TEXT = 'değer ile yeni bir ekran aç'
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP = 'Opens a new screen in a multiple screen app and passes the '
        + 'start value to that screen.';

    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#getstartvalue';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE = 'get start value';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_SCREENNAME = 'ekranAdı';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_STARTVALUE = 'başlangıçDeğeri';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_COLLAPSED_TEXT = 'başlangıç değeri al';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP = 'Returns the value that was passed to this screen when it '
        + 'was opened, typically by another screen in a multiple-screen app. If no value was '
        + 'passed, returns the empty text.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL = 'https://docs.makeroid.io/blocks/control.html#closescreen';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE = 'ekranı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_COLLAPSED_TEXT = 'ekranı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP = 'Şimdiki ekranı kapat.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#closescreenwithvalue';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE = 'ekranı değer ile kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT = 'sonuç';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_COLLAPSED_TEXT = 'close screen with value';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP = 'Closes the current screen and returns a result to the '
        + 'screen that opened this one.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL = 'https://docs.makeroid.io/blocks/control.html#closeapp';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE = 'uygulamayı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_COLLAPSED_TEXT = 'uygulamayı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP = 'Closes all screens in this app and stops the app.';

    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL = 'https://docs.makeroid.io/blocks/control.html#getplainstarttext';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE = 'get plain start text';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_COLLAPSED_TEXT = 'get plain start text';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP = 'Returns the plain text that was passed to this screen when '
        + 'it was started by another app. If no value was passed, returns the empty text. For '
        + 'multiple screen apps, use get start value rather than get plain start text.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL = 'https://docs.makeroid.io/blocks/control.html#closescreenwithplaintext';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE = 'close screen with plain text';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_COLLAPSED_TEXT = 'close screen with plain text';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP = 'Closes the current screen and returns text to the app that '
        + 'opened this one.   This command is for returning text to non-Makeroid activities, not to Makeroid screens. '
        + 'For Makeroid Screens, as in multiple screen apps, use Close Screen with Value, not Close Screen with Plain Text.';

// Logic Blocks.
    Blockly.Msg.LANG_CATEGORY_LOGIC = 'Logic';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ = 'https://docs.makeroid.io/blocks/logic.html#=';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ = 'https://docs.makeroid.io/blocks/logic.html#not=';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Tests whether two things are equal. \n' +
        'The things being compared can be any things, not only numbers. \n' +
        'Numbers are considered to be equal to their printed form as strings, \n' +
        'for example, the number 0 is equal to the text \"0\".  Also, two strings \n' +
        'that represent numbers are equal if the numbers are equal, for example \n' +
        '\"1\" is equal to \"01\".';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Return true if both inputs are not equal to each other.';
    Blockly.Msg.LANG_LOGIC_COMPARE_TRANSLATED_NAME = 'logic equal';
    Blockly.Msg.LANG_LOGIC_COMPARE_EQ = '=';
    Blockly.Msg.LANG_LOGIC_COMPARE_NEQ = '\u2260';

    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND = 'https://docs.makeroid.io/blocks/logic.html#and';
    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR = 'https://docs.makeroid.io/blocks/logic.html#or';
    Blockly.Msg.LANG_LOGIC_OPERATION_AND = 'and';
    Blockly.Msg.LANG_LOGIC_OPERATION_OR = 'or';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Return true if all inputs are true.';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Return true if any input is true.';

    Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL = 'https://docs.makeroid.io/blocks/logic.html#not';
    Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT = 'not';
    Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false.\n' +
        'Returns false if the input is true.';

    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL = 'https://docs.makeroid.io/blocks/logic.html#true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL = 'https://docs.makeroid.io/blocks/logic.html#false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE = 'true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE = 'false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE = 'Returns the boolean true.';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE = 'Returns the boolean false.';

// Math Blocks.
    Blockly.Msg.LANG_CATEGORY_MATH = 'Math';
    Blockly.Msg.LANG_MATH_NUMBER_HELPURL = 'https://docs.makeroid.io/blocks/math.html#number';
    Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP = 'Report the number shown.';
    Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER = 'number';

    Blockly.Msg.LANG_MATH_COMPARE_HELPURL = '';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ = 'https://docs.makeroid.io/blocks/math.html#=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ = 'https://docs.makeroid.io/blocks/math.html#not=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT = 'https://docs.makeroid.io/blocks/math.html#lt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE = 'https://docs.makeroid.io/blocks/math.html#lte';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT = 'https://docs.makeroid.io/blocks/math.html#gt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE = 'https://docs.makeroid.io/blocks/math.html#gte';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_EQ = 'Return true if both numbers are equal to each other.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_NEQ = 'Return true if both numbers are not equal to each other.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LT = 'Return true if the first number is smaller\n' +
        'than the second number.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LTE = 'Return true if the first number is smaller\n' +
        'than or equal to the second number.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GT = 'Return true if the first number is greater\n' +
        'than the second number.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GTE = 'Return true if the first number is greater\n' +
        'than or equal to the second number.';
    Blockly.Msg.LANG_MATH_COMPARE_EQ = '=';
    Blockly.Msg.LANG_MATH_COMPARE_NEQ = '\u2260';
    Blockly.Msg.LANG_MATH_COMPARE_LT = '<';
    Blockly.Msg.LANG_MATH_COMPARE_LTE = '\u2264';
    Blockly.Msg.LANG_MATH_COMPARE_GT = '>';
    Blockly.Msg.LANG_MATH_COMPARE_GTE = '\u2265';

    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD = 'https://docs.makeroid.io/blocks/math.html#add';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS = 'https://docs.makeroid.io/blocks/math.html#subtract';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY = 'https://docs.makeroid.io/blocks/math.html#multiply';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE = 'https://docs.makeroid.io/blocks/math.html#divide';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER = 'https://docs.makeroid.io/blocks/math.html#exponent';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to\n' +
        'the power of the second number.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_ADD = '+';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS = '-';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MULTIPLY = '*';
    Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE = '/';
    Blockly.Msg.LANG_MATH_ARITHMETIC_POWER = '^';

    /*Blockly.Msg.LANG_MATH_CHANGE_TITLE_CHANGE = 'change';
     Blockly.Msg.LANG_MATH_CHANGE_TITLE_ITEM = 'item';
     Blockly.Msg.LANG_MATH_CHANGE_INPUT_BY = 'by';
     Blockly.Msg.LANG_MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';*/


    Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT = 'square root';
    Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absolute';
    Blockly.Msg.LANG_MATH_SINGLE_OP_NEG = 'neg';
    Blockly.Msg.LANG_MATH_SINGLE_OP_LN = 'log';
    Blockly.Msg.LANG_MATH_SINGLE_OP_EXP = 'e^';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT = 'https://docs.makeroid.io/blocks/math.html#sqrt';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS = 'https://docs.makeroid.io/blocks/math.html#abs';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG = 'https://docs.makeroid.io/blocks/math.html#neg';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number, i.e. the logarithm to the base e (2.71828...)';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN ='https://docs.makeroid.io/blocks/math.html#log';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Return e (2.71828...) to the power of a number.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP ='https://docs.makeroid.io/blocks/math.html#e';
    /*Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';*/

    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND = 'Round a number up or down.';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND = 'https://docs.makeroid.io/blocks/math.html#round';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING = 'Rounds the input to the smallest\n' +
        'number not less then the input';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING =  'https://docs.makeroid.io/blocks/math.html#ceiling';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR = 'Rounds the input to the largest\n' +
        'number not greater then the input';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR =  'https://docs.makeroid.io/blocks/math.html#floor';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND = 'round';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING = 'ceiling';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR = 'floor';

    Blockly.Msg.LANG_MATH_TRIG_SIN = 'sin';
    Blockly.Msg.LANG_MATH_TRIG_COS = 'cos';
    Blockly.Msg.LANG_MATH_TRIG_TAN = 'tan';
    Blockly.Msg.LANG_MATH_TRIG_ASIN = 'asin';
    Blockly.Msg.LANG_MATH_TRIG_ACOS = 'acos';
    Blockly.Msg.LANG_MATH_TRIG_ATAN = 'atan';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2 = 'atan2';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_X = 'x';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_Y = 'y';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_SIN = 'Provides the sine of the given angle in degrees.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN = 'https://docs.makeroid.io/blocks/math.html#sin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS = 'Provides the cosine of the given angle in degrees.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS = 'https://docs.makeroid.io/blocks/math.html#cos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN = 'Provides the tangent of the given angle in degrees.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN = 'https://docs.makeroid.io/blocks/math.html#tan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Provides the angle in the range (-90,+90]\n' +
        'degrees with the given sine value.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN = 'https://docs.makeroid.io/blocks/math.html#asin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Provides the angle in the range [0, 180)\n' +
        'degrees with the given cosine value.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS = 'https://docs.makeroid.io/blocks/math.html#acos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Provides the angle in the range (-90, +90)\n' +
        'degrees with the given tangent value.';
    ATAN : Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN = 'https://docs.makeroid.io/blocks/math.html#atan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN2 = 'Provides the angle in the range (-180, +180]\n' +
        'degrees with the given rectangular coordinates.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN2 = 'https://docs.makeroid.io/blocks/math.html#atan2';

    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';
    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX = 'max';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest of its arguments..';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Return the largest of its arguments..';

    Blockly.Msg.LANG_MATH_DIVIDE = '\u00F7';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_MODULO = 'modulo of';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_REMAINDER = 'remainder of';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_QUOTIENT = 'quotient of';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_MODULO = 'Return the modulo.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_MODULO = 'https://docs.makeroid.io/blocks/math.html#modulo';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_REMAINDER = 'Return the remainder.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_REMAINDER = 'https://docs.makeroid.io/blocks/math.html#remainder';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_QUOTIENT = 'Return the quotient.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_QUOTIENT = 'https://docs.makeroid.io/blocks/math.html#quotient';

    Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL = 'https://docs.makeroid.io/blocks/math.html#randomint';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM = 'random integer';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM = 'itibaren';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO = 'to';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT = 'random integer from %1 to %2';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP = 'Returns a random integer between the upper bound\n' +
        'and the lower bound. The bounds will be clipped to be smaller\n' +
        'than 2**30.';

    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL = 'https://docs.makeroid.io/blocks/math.html#randomfrac';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random number between 0 and 1.';

    Blockly.Msg.LANG_MATH_RANDOM_SEED_HELPURL = 'https://docs.makeroid.io/blocks/math.html#randomseed';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TITLE_RANDOM = 'random set seed';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_INPUT_TO = 'to';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TOOLTIP = 'specifies a numeric seed\n' +
        'for the random number generator';

    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TITLE_CONVERT = 'convert';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_RAD_TO_DEG = 'radians to degrees';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_DEG_TO_RAD = 'degrees to radians';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_RAD_TO_DEG = 'Returns the degree value in the range\n' +
        '[0, 360) corresponding to its radians argument.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_RAD_TO_DEG = 'https://docs.makeroid.io/blocks/math.html#convertrad';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_DEG_TO_RAD = 'Returns the radian value in the range\n' +
        '[-\u03C0, +\u03C0) corresponding to its degrees argument.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_DEG_TO_RAD = 'https://docs.makeroid.io/blocks/math.html#convertdeg';

    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_HELPURL = 'https://docs.makeroid.io/blocks/math.html#format';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TITLE = 'format as decimal';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_NUM = 'number';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_PLACES = 'places';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT = 'format as decimal number %1 places %2';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TOOLTIP = 'Returns the number formatted as a decimal\n' +
        'with a specified number of places.';

    Blockly.Msg.LANG_MATH_IS_A_NUMBER_HELPURL = 'https://docs.makeroid.io/blocks/math.html#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_INPUT_NUM = 'is number?';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_TOOLTIP = 'Tests if something is a number.';

    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_HELPURL = 'https://docs.makeroid.io/blocks/math.html#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_INPUT_NUM = 'is Base 10?';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_TOOLTIP = 'Tests if something is a string that represents a positive base 10 integer.';

    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_HELPURL = 'https://docs.makeroid.io/blocks/math.html#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_INPUT_NUM = 'is hexadecimal?';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_TOOLTIP = 'Tests if something is a string that represents a hexadecimal number.';

    Blockly.Msg.LANG_MATH_IS_A_BINARY_HELPURL = 'https://docs.makeroid.io/blocks/math.html#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_INPUT_NUM = 'is binary?';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_TOOLTIP = 'Tests if something is a string that represents a binary number.';


    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TITLE_CONVERT = 'numarayı çevir';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_HEX = 'base 10 to hex';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_HEX = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_HEX = 'Takes a positive integer in base 10 and returns the string that represents the number in hexadecimal';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_HEX_TO_DEC = 'hex to base 10';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_HEX_TO_DEC = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_HEX_TO_DEC = 'Takes a string that represents a number in hexadecimal and returns the string that represents the number in base 10';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_BIN = 'base 10 to binary';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_BIN = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_BIN = 'Takes a positive integer in base 10 and returns the string that represents the number in binary';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_BIN_TO_DEC = 'binary to base 10';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_BIN_TO_DEC = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_BIN_TO_DEC = 'Takes a string that represents a number in binary and returns the string that represents the number in base 10';

// Text Blocks.
    Blockly.Msg.LANG_CATEGORY_TEXT = 'Text';
    Blockly.Msg.LANG_TEXT_TEXT_HELPURL = 'https://docs.makeroid.io/blocks/text.html#string';
    Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP = 'A text string.';
    Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE = '\u201C';
    Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE = '\u201D';

    Blockly.Msg.LANG_TEXT_JOIN_HELPURL = 'https://docs.makeroid.io/blocks/text.html#join';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
    Blockly.Msg.LANG_TEXT_JOIN_TOOLTIP = 'Appends all the inputs to form a single text string.\n'
        + 'If there are no inputs, makes an empty text.';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN = 'join';

    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TITLE_ITEM = 'string';
    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TOOLTIP = '';

    Blockly.Msg.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
    Blockly.Msg.LANG_TEXT_APPEND_TO = 'ona';
    Blockly.Msg.LANG_TEXT_APPEND_APPENDTEXT = 'append text';
    Blockly.Msg.LANG_TEXT_APPEND_VARIABLE = 'item';
    Blockly.Msg.LANG_TEXT_APPEND_TOOLTIP = 'Append some text to variable "%1".';

    Blockly.Msg.LANG_TEXT_LENGTH_HELPURL = 'https://docs.makeroid.io/blocks/text.html#length';
    Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH = 'length';
    Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP = 'Returns number of letters (including spaces)\n' +
        'in the provided text.';

    Blockly.Msg.LANG_TEXT_ISEMPTY_HELPURL = 'https://docs.makeroid.io/blocks/text.html#isempty';
    Blockly.Msg.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'is empty';
    Blockly.Msg.LANG_TEXT_ISEMPTY_TOOLTIP = 'Returns true if the length of the\n' + 'text is 0, false otherwise.';

    Blockly.Msg.LANG_TEXT_COMPARE_LT = ' <';
    Blockly.Msg.LANG_TEXT_COMPARE_EQUAL = ' =';
    Blockly.Msg.LANG_TEXT_COMPARE_GT = ' >';
    Blockly.Msg.LANG_TEXT_COMPARE_HELPURL = 'https://docs.makeroid.io/blocks/text.html#compare';
    Blockly.Msg.LANG_TEXT_COMPARE_INPUT_COMPARE = 'compare texts';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_LT = 'Tests whether text1 is lexicographically less than text2.\n'
        + 'if one text is the prefix of the other, the shorter text is\n'
        + 'considered smaller. Uppercase characters precede lowercase characters.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_EQUAL = 'Tests whether text strings are identical, ie., have the same\n'
        + 'characters in the same order. This is different from ordinary =\n'
        + 'in the case where the text strings are numbers: 123 and 0123 are =\n'
        + 'but not text =.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_GT = 'Reports whether text1 is lexicographically greater than text2.\n'
        + 'if one text is the prefix of the other, the shorter text is considered smaller.\n'
        + 'Uppercase characters precede lowercase characters.';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_TOOLTIP = "Produces text, like a text block.  The difference is that the \n"
        + "text is not easily discoverable by examining the app's APK.  Use this when creating apps \n"
        + "to distribute that include confidential information, for example, API keys.  \n"
        + "Warning: This provides only very low security against expert adversaries.";
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE = 'Obfuscated Text';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_HELPURL = 'https://docs.makeroid.io/blocks/text.html#obfuscatetext';

    /*Blockly.Msg.LANG_TEXT_ENDSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_ENDSTRING_INPUT = 'letters in text';
     Blockly.Msg.LANG_TEXT_ENDSTRING_TOOLTIP = 'Returns specified number of letters at the beginning or end of the text.';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_FIRST = 'first';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_LAST = 'last';*/

    /*Blockly.Msg.LANG_TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_INDEXOF_TITLE_FIND = 'find';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE = 'occurrence of text';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'in text';
     Blockly.Msg.LANG_TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence\n' +
     'of first text in the second text.\n' +
     'Returns 0 if text is not found.';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'first';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'last';*/

    /*Blockly.Msg.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_AT = 'letter at';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_INTEXT = 'in text';
     Blockly.Msg.LANG_TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';*/

    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'upcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_DOWNCASE = 'downcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_UPPERCASE = 'Returns a copy of its text string argument converted to uppercase.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_UPPERCASE = 'https://docs.makeroid.io/blocks/text.html#upcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_DOWNCASE = 'Returns a copy of its text string argument converted to lowercase.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_DOWNCASE = 'https://docs.makeroid.io/blocks/text.html#downcase';

    Blockly.Msg.LANG_TEXT_TRIM_HELPURL = 'https://docs.makeroid.io/blocks/text.html#trim';
    Blockly.Msg.LANG_TEXT_TRIM_TITLE_TRIM = 'trim';
    Blockly.Msg.LANG_TEXT_TRIM_TOOLTIP = 'Returns a copy of its text string arguments with any\n'
        + 'leading or trailing spaces removed.';

    Blockly.Msg.LANG_TEXT_STARTS_AT_HELPURL = 'https://docs.makeroid.io/blocks/text.html#startsat';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_STARTS_AT = 'starts at';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_PIECE = 'piece';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT = 'starts at  text %1 piece %2';
    Blockly.Msg.LANG_TEXT_STARTS_AT_TOOLTIP = 'Returns the starting index of the piece in the text.\n'
        + 'where index 1 denotes the beginning of the text. Returns 0 if the\n'
        + 'piece is not in the text.';

    Blockly.Msg.LANG_TEXT_CONTAINS_HELPURL = 'https://docs.makeroid.io/blocks/text.html#contains';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_CONTAINS = 'contains';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_PIECE = 'piece';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT = 'contains  text %1 piece %2';
    Blockly.Msg.LANG_TEXT_CONTAINS_TOOLTIP = 'Tests whether the piece is contained in the text.';

    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL = '';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT = 'at';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT_LIST = 'at (list)';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST = 'split at first';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST_OF_ANY = 'split at first of any';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT = 'split';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_ANY = 'split at any';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST = 'Divides the given text into two pieces using the location of the first occurrence of \n'
        + 'the text \'at\' as the dividing point, and returns a two-item list consisting of the piece \n'
        + 'before the dividing point and the piece after the dividing point. \n'
        + 'Splitting "apple,banana,cherry,dogfood" with a comma as the splitting point \n'
        + 'returns a list of two items: the first is the text "apple" and the second is the text \n'
        + '"banana,cherry,dogfood". \n'
        + 'Notice that the comma after "apple" does not appear in the result, \n'
        + 'because that is the dividing point.';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST = 'https://docs.makeroid.io/blocks/text.html#splitat';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST_OF_ANY = 'Divides the given text into a two-item list, using the first location of any item \n'
        + 'in the list \'at\' as the dividing point. \n\n'
        + 'Splitting "I love apples bananas apples grapes" by the list "(ba,ap)" returns \n'
        + 'a list of two items, the first being "I love" and the second being \n'
        + '"ples bananas apples grapes."';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST_OF_ANY = 'https://docs.makeroid.io/blocks/text.html#splitatfirstofany';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT = 'Divides text into pieces using the text \'at\' as the dividing points and produces a list of the results.  \n'
        + 'Splitting "one,two,three,four" at "," (comma) returns the list "(one two three four)". \n'
        + 'Splitting "one-potato,two-potato,three-potato,four" at "-potato", returns the list "(one two three four)".';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT = 'https://docs.makeroid.io/blocks/text.html#split';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_ANY = 'Divides the given text into a list, using any of the items in the list \'at\' as the \n'
        + 'dividing point, and returns a list of the results. \n'
        + 'Splitting "appleberry,banana,cherry,dogfood" with \'at\' as the two-element list whose \n'
        + 'first item is a comma and whose second item is "rry" returns a list of four items: \n'
        + '"(applebe banana che dogfood)".';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_ANY = 'https://docs.makeroid.io/blocks/text.html#splitatany';

    /*.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
     Blockly.Msg.LANG_TEXT_PRINT_TITLE_PRINT = 'print';
     Blockly.Msg.LANG_TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';*/

    /*Blockly.Msg.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
     Blockly.Msg.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR = 'prompt for';
     Blockly.Msg.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE = 'with message';
     Blockly.Msg.LANG_TEXT_PROMPT_TOOLTIP = 'Prompt for user input with the specified text.';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_TEXT = 'text';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_NUMBER = 'number';*/

    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_HELPURL = 'https://docs.makeroid.io/blocks/text.html#splitspaces';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_TITLE = 'split at spaces';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_TOOLTIP = 'Split the text into pieces separated by spaces.';

    Blockly.Msg.LANG_TEXT_SEGMENT_HELPURL = 'https://docs.makeroid.io/blocks/text.html#segment';
    Blockly.Msg.LANG_TEXT_SEGMENT_TITLE_SEGMENT = 'segment';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_START = 'start';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_LENGTH = 'length';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT = 'segment  text %1 start %2 length %3';
    Blockly.Msg.LANG_TEXT_SEGMENT_AT_TOOLTIP = 'Extracts the segment of the given length from the given text\n'
        + 'starting from the given text starting from the given position. Position\n'
        + '1 denotes the beginning of the text.';

    Blockly.Msg.LANG_TEXT_REPLACE_ALL_HELPURL = 'https://docs.makeroid.io/blocks/text.html#replaceall';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_SEGMENT = 'segment';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TITLE_REPLACE_ALL = 'replace all';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_REPLACEMENT = 'replacement';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT = 'replace all text %1 segment %2 replacement %3';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TOOLTIP = 'Returns a new text obtained by replacing all occurrences\n'
        + 'of the segment with the replacement.';

    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#isstring';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TITLE = 'is string?';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TOOLTIP = 'Returns true if input is a string.';

// Lists Blocks.
    Blockly.Msg.LANG_CATEGORY_LISTS = 'Lists';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
    Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE = 'create empty list';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#makealist';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST = 'make a list';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'item';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

    Blockly.Msg.LANG_LISTS_ADD_ITEM_TITLE = 'item';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_TOOLTIP = 'Add an item to the list.';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#additems';

    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#selectlistitem';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT = 'select list item';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_INDEX = 'index';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT = 'select list item  list %1 index %2';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP = 'Returns the item at position index in the list.';

    Blockly.Msg.LANG_LISTS_IS_IN_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#inlist';
    Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN = 'is in list?';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_THING = 'thing';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT = 'is in list? thing %1 list %2'
    Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP = 'Returns true if the the thing is an item in the list, and '
        + 'false if not.';

    Blockly.Msg.LANG_LISTS_POSITION_IN_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#indexinlist';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TITLE_POSITION = 'index in list';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_THING = 'thing';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT = 'index in list  thing %1 list %2';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TOOLTIP = 'Find the position of the thing in the list. If it\'s not in '
        + 'the list, return 0.';

    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#pickrandomitem';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM = 'pick a random item';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TOOLTIP = 'Pick an item at random from the list.';

    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#replace';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE = 'replace list item';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_INDEX = 'index';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_REPLACEMENT = 'replacement';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT = 'replace list item  list %1 index %2 replacement %3';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TOOLTIP = 'Replaces the nth item in a list.';

    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#removeitem';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE = 'remove list item';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_INDEX = 'index';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT = 'remove list item  list %1 index %2';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TOOLTIP = 'Removes the item at the specified position from the list.';

    /*Blockly.Msg.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_REPEAT_TITLE_CREATE = 'create list with item';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_REPEATED = 'repeated';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_TIMES = 'times';
     Blockly.Msg.LANG_LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value\n' +
     'repeated the specified number of times.';*/

    Blockly.Msg.LANG_LISTS_LENGTH_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#lengthoflist';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH = 'length of list';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT = 'length of list list %1';
    Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP = 'Counts the number of items in a list.';

    Blockly.Msg.LANG_LISTS_APPEND_LIST_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#append';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TITLE_APPEND = 'append to list';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST1 = 'list1';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST2 = 'list2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT = 'append to list  list1 %1 list2 %2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TOOLTIP = 'Appends all the items in list2 onto the end of list1. After '
        + 'the append, list1 will include these additional elements, but list2 will be unchanged.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#additems';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD = 'add items to list';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST = ' list';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM = 'item';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT = 'add items to list list %1 item %2';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP = 'Adds items to the end of a list.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD = 'list';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';

    Blockly.Msg.LANG_LISTS_COPY_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#copy';
    Blockly.Msg.LANG_LISTS_COPY_TITLE_COPY = 'copy list';
    Blockly.Msg.LANG_LISTS_COPY_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_COPY_TOOLTIP = 'Makes a copy of a list, including copying all sublists';

    Blockly.Msg.LANG_LISTS_IS_LIST_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#isalist';
    Blockly.Msg.LANG_LISTS_IS_LIST_TITLE_IS_LIST = 'is a list?';
    Blockly.Msg.LANG_LISTS_IS_LIST_INPUT_THING = 'thing';
    Blockly.Msg.LANG_LISTS_IS_LIST_TOOLTIP = 'Tests if something is a list.';

    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#listtocsvrow';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV = 'list to csv row';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TOOLTIP = 'Interprets the list as a row of a table and returns a CSV '
        + '\(comma-separated value\) text representing the row. Each item in the row list is '
        + 'considered to be a field, and is quoted with double-quotes in the resulting CSV text. '
        + 'Items are separated by commas. The returned row text does not have a line separator at '
        + 'the end.';

    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#listfromcsvrow';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV = 'list from csv row';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TOOLTIP = 'Parses a text as a CSV \(comma-separated value\) formatted '
        + 'row to produce a list of fields. It is an error for the row text to contain unescaped '
        + 'newlines inside fields \(effectively, multiple lines\). It is okay for the row text to '
        + 'end in a single newline or CRLF.';

    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#listtocsvtable';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV = 'list to csv table';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TOOLTIP = 'Interprets the list as a table in row-major format and '
        + 'returns a CSV \(comma-separated value\) text representing the table. Each item in the '
        + 'list should itself be a list representing a row of the CSV table. Each item in the row '
        + 'list is considered to be a field, and is quoted with double-quotes in the resulting CSV '
        + 'text. In the returned text, items in rows are separated by commas and rows are '
        + 'separated by CRLF \(\\r\\n\).';

    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#listfromcsvtable';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV = 'list from csv table';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP = 'Parses a text as a CSV \(comma-separated value\) formatted '
        + 'table to produce a list of rows, each of which is a list of fields. Rows can be '
        + 'separated by newlines \(\\n\) or CRLF \(\\r\\n\).';

    Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#insert';
    Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST = 'insert list item';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_INDEX = 'index';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_ITEM = 'item';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT = 'insert list item  list %1 index %2 item %3';
    Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP = 'Insert an item into a list at the specified position.';

    Blockly.Msg.LANG_LISTS_IS_EMPTY_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#islistempty';
    Blockly.Msg.LANG_LISTS_TITLE_IS_EMPTY = 'is list empty?';
    Blockly.Msg.LANG_LISTS_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_IS_EMPTY_TOOLTIP = 'Returns true if the list is empty.';

    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#lookuppairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS = 'look up in pairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_KEY = 'key';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_PAIRS = 'pairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_NOT_FOUND = 'notFound';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT = 'look up in pairs  key %1 pairs %2 notFound %3';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP = 'Returns the value associated with the key in the list of pairs';

    /*Blockly.Msg.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TITLE_FIND = 'find';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_OCCURRENCE = 'occurrence of item';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'in list';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence\n' +
     'of the item in the list.\n' +
     'Returns 0 if text is not found.';
     Blockly.Msg.LANG_LISTS_INDEX_OF_FIRST = 'first';
     Blockly.Msg.LANG_LISTS_INDEX_OF_LAST = 'last';

     Blockly.Msg.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TITLE_GET = 'get item at';
     Blockly.Msg.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'in list';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TOOLTIP = 'Returns the value at the specified position in a list.';

     Blockly.Msg.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_SET = 'set item at';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'in list';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_TO = 'to';
     Blockly.Msg.LANG_LISTS_SET_INDEX_TOOLTIP = 'Sets the value at the specified position in a list.';*/

// Variables Blocks.
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL = 'https://docs.makeroid.io/blocks/variables.html#global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT = 'initialize global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO = 'to';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_COLLAPSED_TEXT = 'global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP = 'Creates a global variable and gives it the value of the attached blocks.';

    Blockly.Msg.LANG_VARIABLES_GET_HELPURL = 'https://docs.makeroid.io/blocks/variables.html#get';
    Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET = 'get';
    /* Blockly.Msg.LANG_VARIABLES_GET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_GET_COLLAPSED_TEXT = 'get';
    Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';

    Blockly.Msg.LANG_VARIABLES_SET_HELPURL = 'https://docs.makeroid.io/blocks/variables.html#set';
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET = 'set';
    /* Blockly.Msg.LANG_VARIABLES_SET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO = 'to';
    Blockly.Msg.LANG_VARIABLES_SET_COLLAPSED_TEXT = 'set';
    Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';
    Blockly.Msg.LANG_VARIABLES_VARIABLE = ' variable';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_HELPURL = 'https://docs.makeroid.io/blocks/variables.html#do';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TITLE_INIT = 'initialize local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_DEFAULT_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_INPUT_TO = 'to';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_IN_DO = 'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_COLLAPSED_TEXT = 'local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TOOLTIP = 'Allows you to create variables that are only accessible in the do part of this block.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TRANSLATED_NAME = 'initialize local in do';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL = 'https://docs.makeroid.io/blocks/variables.html#return';
    /* // These don't differ between the statement and expression
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TITLE_INIT = 'initialize local';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_NAME = 'name';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_TO = 'to';
     */
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN = 'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_COLLAPSED_TEXT = 'local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP = 'Allows you to create variables that are only accessible in the return part of this block.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TRANSLATED_NAME = 'initialize local in return';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES = 'local names';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP = '';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_TITLE_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_DEFAULT_VARIABLE = 'x';

// Procedures Blocks.
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE = 'to';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'procedure';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO = 'yap';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_COLLAPSED_PREFIX = 'to ';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'A procedure that does not return a value.';

    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#doreturn';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_THEN_RETURN = 'result';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_DO = 'yap';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_RETURN = 'result';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_TOOLTIP = 'Runs the blocks in \'yap\' and returns a statement. Useful if you need to run a procedure before returning a value to a variable.';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_COLLAPSED_TEXT = 'yap/sonuç';

    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#return';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE = 'to';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DO = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN = 'result';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_COLLAPSED_PREFIX = 'to ';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'A procedure returning a result value.';

    Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning:\n' +
        'This procedure has\n' +
        'duplicate inputs.';

    Blockly.Msg.LANG_PROCEDURES_GET_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#get';

    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#do';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL = 'çağır ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'prosedür';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_COLLAPSED_PREFIX = 'çağır ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Call a procedure with no return value.';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TRANSLATED_NAME = 'çağır geri gönderme';

    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#return';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_COLLAPSED_PREFIX = 'call ';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Call a procedure with a return value.';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TRANSLATED_NAME = 'çağır geri gönder';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'girişler';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE = 'giriş:';

    Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Prosedürü Öne Çıkart';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP = '';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP = '';

// Components Blocks.
    Blockly.Msg.UNDEFINED_BLOCK_TOOLTIP = "This block is not defined. Delete this block!";

    Blockly.Msg.LANG_COMPONENT_BLOCK_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_WHEN = 'olduğu zaman ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_DO = 'yap';

    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_TITLE_CALL = 'çağır ';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_CALL = 'çağır ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_FOR_COMPONENT = 'bileşen için';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GETTER_HELPURL = '';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_TITLE_OF_COMPONENT = 'bileşenin';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_SET = 'ayarla ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_TO = ' ona';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_SET = 'ayarla ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_TO = ' ona';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_OF_COMPONENT = 'bileşenin';

///////////////////
    /* HelpURLs for Component Blocks */

//User Interface Components
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_HELPURL = '/components/user-interface/Button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_PROPERTIES_HELPURL = '/components/user-interface/buttonproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_EVENTS_HELPURL = '/components/user-interface/buttonevents';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_HELPURL = '/components/user-interface/CheckBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_PROPERTIES_HELPURL = '/components/user-interface/checkboxproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_EVENTS_HELPURL = '/components/user-interface/checkboxevents';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_HELPURL = '/components/sensors/Clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_PROPERTIES_HELPURL = '/components/sensors/Clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_EVENTS_HELPURL = '/components/sensors/Clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_METHODS_HELPURL = '/components/sensors/Clock';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_HELPURL = '/components/user-interface/Image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PROPERTIES_HELPURL = '/components/user-interface/imageproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EVENTS_HELPURL = '/components/user-interface/imageevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_METHODS_HELPURL = '/components/user-interface/imagemethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_HELPURL = '/components/user-interface/Label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_PROPERTIES_HELPURL = '/components/user-interface/labelproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_EVENTS_HELPURL = '/components/user-interface/labelevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_METHODS_HELPURL = '/components/user-interface/labelmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_HELPURL = '/components/user-interface/ListPicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_PROPERTIES_HELPURL = '/components/user-interface/listpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_EVENTS_HELPURL = '/components/user-interface/listpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_METHODS_HELPURL = '/components/user-interface/listpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_HELPURL = "/components/user-interface/Notifier";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_PROPERTIES_HELPURL = '/components/user-interface/notifierproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_EVENTS_HELPURL = '/components/user-interface/notifierevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_METHODS_HELPURL = '/components/user-interface/notifiermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_HELPURL = '/components/user-interface/PasswordTextBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_PROPERTIES_HELPURL = '/components/user-interface/pwdboxproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_EVENTS_HELPURL = '/components/user-interface/pwdboxevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_METHODS_HELPURL = '/components/user-interface/pwdboxmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_HELPURL = '/components/user-interface/Screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_PROPERTIES_HELPURL = '/components/user-interface/screenproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_EVENTS_HELPURL = '/components/user-interface/screenevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_METHODS_HELPURL = '/components/user-interface/screenmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_HELPURL = '/components/user-interface/Slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_PROPERTIES_HELPURL = '/components/user-interface/sliderproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_EVENTS_HELPURL = '/components/user-interface/sliderevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_METHODS_HELPURL = '/components/user-interface/slidermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_HELPURL = '/components/user-interface/TextBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_PROPERTIES_HELPURL = '/components/user-interface/textboxproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_EVENTS_HELPURL = '/components/user-interface/textboxevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_METHODS_HELPURL = '/components/user-interface/textboxmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_HELPURL = "/components/user-interface/WebViewer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_PROPERTIES_HELPURL = '/components/user-interface/webviewerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_EVENTS_HELPURL = '/components/user-interface/webviewerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_METHODS_HELPURL = '/components/user-interface/webviewermethods';

//Layout components
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_HELPURL = "/components/layout/HorizontalArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_PROPERTIES_HELPURL = '/components/layout/horizarrangeproperties';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_HELPURL = "/components/layout/VerticalArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_PROPERTIES_HELPURL = '/components/layout/vertarrangeproperties';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_HELPURL = "/components/layout/TableArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_PROPERTIES_HELPURL = '/components/layout/tablearrangeproperties';

//Media components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_HELPURL = '/components/media/Camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_PROPERTIES_HELPURL = '/components/media/camcorderproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_EVENTS_HELPURL = '/components/media/camcorderevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_METHODS_HELPURL = '/components/media/camcordermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_HELPURL = '/components/media/Camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_PROPERTIES_HELPURL = '/components/media/cameraproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_EVENTS_HELPURL = '/components/media/cameraevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_METHODS_HELPURL = '/components/media/cameramethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_HELPURL = '/components/media/ImagePicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_PROPERTIES_HELPURL = '/components/media/imagepickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_EVENTS_HELPURL = '/components/media/imagepickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_METHODS_HELPURL = '/components/media/imagepickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_HELPURL = '/components/media/Player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_PROPERTIES_HELPURL = '/components/media/playerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_EVENTS_HELPURL = '/components/media/playerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_METHODS_HELPURL = '/components/media/playermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_HELPURL = '/components/media/Sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_PROPERTIES_HELPURL = '/components/media/soundproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_EVENTS_HELPURL = '/components/media/soundevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_METHODS_HELPURL = '/components/media/soundmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_HELPURL = "/components/media/SoundRecorder";
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_PROPERTIES_HELPURL = '/components/media/soundrecorderproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_EVENTS_HELPURL = '/components/media/soundrecorderevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_METHODS_HELPURL = '/components/media/soundrecordermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_HELPURL = "/components/media/SpeechRecognizer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_PROPERTIES_HELPURL = '/components/media/speechrecognizerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_EVENTS_HELPURL = '/components/media/speechrecognizerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_METHODS_HELPURL = '/components/media/speechrecognizermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_HELPURL = "/components/media/TextToSpeech";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_PROPERTIES_HELPURL = '/components/media/texttospeechproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_EVENTS_HELPURL = '/components/media/texttospeechevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_METHODS_HELPURL = '/components/media/texttospeechmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_HELPURL = '/components/media/VideoPlayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_PROPERTIES_HELPURL = '/components/media/videoplayerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_EVENTS_HELPURL = '/components/media/videoplayerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_METHODS_HELPURL = '/components/media/videoplayermethods';

// Drawing and Animation components
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_HELPURL = "/components/drawing-and-animation/Ball";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_PROPERTIES_HELPURL = '/components/drawing-and-animation/ballproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_EVENTS_HELPURL = '/components/drawing-and-animation/ballevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_METHODS_HELPURL = '/components/drawing-and-animation/ballmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_HELPURL = '/components/drawing-and-animation/Canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_PROPERTIES_HELPURL = '/components/drawing-and-animation/canvasproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_EVENTS_HELPURL = '/components/drawing-and-animation/canvasevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_METHODS_HELPURL = '/components/drawing-and-animation/canvasmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_HELPURL = "/components/drawing-and-animation/ImageSprite";
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_PROPERTIES_HELPURL = '/components/drawing-and-animation/imagespriteproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_EVENTS_HELPURL = '/components/drawing-and-animation/imagespriteevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_METHODS_HELPURL = '/components/drawing-and-animation/imagespritemethods';

//Sensor components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_HELPURL = "/components/sensors/AccelerometerSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_PROPERTIES_HELPURL = '/components/sensors/accelerometersensorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_EVENTS_HELPURL = '/components/sensors/accelerometersensorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_METHODS_HELPURL = '/components/sensors/accelerometersensormethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_HELPURL = "/components/sensors/BarcodeScanner";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_PROPERTIES_HELPURL = '/components/sensors/barcodescannerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_EVENTS_HELPURL = '/components/sensors/barcodescannerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_METHODS_HELPURL = '/components/sensors/barcodescannermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_HELPURL = "/components/sensors/GyroscopeSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_PROPERTIES_HELPURL = '/components/sensors/gyroscopesensorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_EVENTS_HELPURL = '/components/sensors/gyroscopesensorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_METHODS_HELPURL = '/components/sensors/gyroscopesensormethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_HELPURL = "/components/sensors/LocationSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_PROPERTIES_HELPURL = '/components/sensors/locationsensorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_EVENTS_HELPURL = '/components/sensors/locationsensorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_METHODS_HELPURL = '/components/sensors/locationsensormethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_HELPURL = "/components/sensors/OrientationSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_PROPERTIES_HELPURL = '/components/sensors/orientationsensorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_EVENTS_HELPURL = '/components/sensors/orientationsensorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_METHODS_HELPURL = '/components/sensors/orientationsensormethods';

//Social components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_HELPURL = "/components/social/ContactPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_PROPERTIES_HELPURL = '/components/social/contactpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_EVENTS_HELPURL = '/components/social/contactpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_METHODS_HELPURL = '/components/social/contactpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_HELPURL = "/components/social/EmailPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_PROPERTIES_HELPURL = '/components/social/emailpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_EVENTS_HELPURL = '/components/social/emailpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_METHODS_HELPURL = '/components/social/emailpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_HELPURL = "/components/social/PhoneCall";
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_PROPERTIES_HELPURL = '/components/social/phonecallproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_EVENTS_HELPURL = '/components/social/phonecallevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_METHODS_HELPURL = '/components/social/phonecallmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_HELPURL = "/components/social/PhoneNumberPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_PROPERTIES_HELPURL = '/components/social/phonenumberpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_EVENTS_HELPURL = '/components/social/phonenumberpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_METHODS_HELPURL = '/components/social/phonenumberpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_HELPURL = "/components/social/Texting";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_PROPERTIES_HELPURL = '/components/social/textingproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_EVENTS_HELPURL = '/components/social/textingevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_METHODS_HELPURL = '/components/social/textingmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_HELPURL = "/components/social/Twitter";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_PROPERTIES_HELPURL = '/components/social/twitterproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_EVENTS_HELPURL = '/components/social/twitterevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_METHODS_HELPURL = '/components/social/twittermethods';

//Storage Components
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_HELPURL = "/components/storage/FusiontablesControl";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_PROPERTIES_HELPURL = '/components/storage/fusiontablescontrolproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_EVENTS_HELPURL = '/components/storage/fusiontablescontrolevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_METHODS_HELPURL = '/components/storage/fusiontablescontrolmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_HELPURL = '/components/storage/TinyDB';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_PROPERTIES_HELPURL = '/components/storage/tinydbproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_EVENTS_HELPURL = '/components/storage/tinydbevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_METHODS_HELPURL = '/components/storage/tinydbmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_HELPURL = "/components/storage/TinyWebDB";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_PROPERTIES_HELPURL = '/components/storage/tinywebdbproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_EVENTS_HELPURL = '/components/storage/tinywebdbevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_METHODS_HELPURL = '/components/storage/tinywebdbmethods';

//Connectivity components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_HELPURL = "/components/connectivity/ActivityStarter";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_PROPERTIES_HELPURL = '/components/connectivity/activitystarterproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_EVENTS_HELPURL = '/components/connectivity/activitystarterevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_METHODS_HELPURL = '/components/connectivity/activitystartermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_HELPURL = "/components/connectivity/BluetoothClient";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_PROPERTIES_HELPURL = '/components/connectivity/bluetoothclientproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_EVENTS_HELPURL = '/components/connectivity/bluetoothclientevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_METHODS_HELPURL = '/components/connectivity/bluetoothclientmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_HELPURL = "/components/connectivity/BluetoothServer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_PROPERTIES_HELPURL = '/components/connectivity/bluetoothserverproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_EVENTS_HELPURL = '/components/connectivity/bluetoothserverevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_METHODS_HELPURL = '/components/connectivity/bluetoothservermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_HELPURL = "/components/connectivity/Web";
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_PROPERTIES_HELPURL = '/components/connectivity/webproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_EVENTS_HELPURL = '/components/connectivity/webevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_METHODS_HELPURL = '/components/connectivity/webmethods';

//Lego mindstorms components
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_HELPURL = "/components/lego-mindstorms/NxtDirectCommands";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtdirectproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_METHODS_HELPURL = '/components/lego-mindstorms/nxtdirectmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_HELPURL = "/components/lego-mindstorms/NxtColorSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtcolorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_EVENTS_HELPURL = '/components/lego-mindstorms/nxtcolorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_METHODS_HELPURL = '/components/lego-mindstorms/nxtcolormethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_HELPURL = "/components/lego-mindstorms/NxtLightSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtlightproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_EVENTS_HELPURL = '/components/lego-mindstorms/nxtlightevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_METHODS_HELPURL = '/components/lego-mindstorms/nxtlightmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_HELPURL = "/components/lego-mindstorms/NxtSoundSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtsoundproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_EVENTS_HELPURL = '/components/lego-mindstorms/nxtsoundevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_METHODS_HELPURL = '/components/lego-mindstorms/nxtsoundmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_HELPURL = "/components/lego-mindstorms/NxtTouchSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxttouchproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_EVENTS_HELPURL = '/components/lego-mindstorms/nxttouchevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_METHODS_HELPURL = '/components/lego-mindstorms/nxttouchmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_HELPURL = "/components/lego-mindstorms/NxtUltrasonicSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtultrasonicproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_EVENTS_HELPURL = '/components/lego-mindstorms/nxtultrasonicevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_METHODS_HELPURL = '/components/lego-mindstorms/nxtultrasonicmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_HELPURL = "/components/lego-mindstorms/NxtDrive";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtdriveproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_METHODS_HELPURL = '/components/lego-mindstorms/nxtdrivemethods';

//Experimental components
    // FirebaseDB
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_HELPURL = "/components/experimentalFirebaseDB";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_PROPERTIES_HELPURL = "/components/experimentalfirebasedbproperties";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_EVENTS_HELPURL = "/components/experimentalfirebasedbevents";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_METHODS_HELPURL = "/components/experimentalfirebasedbmethods";

//Internal components
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_HELPURL = "/components/internal.html#GameClient";
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_PROPERTIES_HELPURL = '/components/internal.html#gameclientproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_EVENTS_HELPURL = '/components/internal.html#gameclientevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_METHODS_HELPURL = '/components/internal.html#gameclientmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_HELPURL = "/components/internal.html#Voting";
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_PROPERTIES_HELPURL = '/components/internal.html#votingproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_EVENTS_HELPURL = '/components/internal.html#votingevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_METHODS_HELPURL = '/components/internal.html#votingmethods';

//Misc
    Blockly.Msg.SHOW_WARNINGS = "Uyarıları Göster";
    Blockly.Msg.HIDE_WARNINGS = "Uyarıları Gizle";
    Blockly.Msg.MISSING_SOCKETS_WARNINGS = "Bütün soketleri bloklarla doldurmanız gerekmektedir.";
    Blockly.Msg.WRONG_TYPE_BLOCK_WARINGS = "This block should be connected to an event block or a procedure definition";

// Messages from replmgr.js
    Blockly.Msg.REPL_ERROR_FROM_COMPANION = "Error from Companion";
    Blockly.Msg.REPL_NETWORK_CONNECTION_ERROR = "Network Connection Error";
    Blockly.Msg.REPL_NETWORK_ERROR = "Network Error";
    Blockly.Msg.REPL_NETWORK_ERROR_RESTART = "Network Error Communicating with Companion.<br />Try restarting the Companion and reconnecting";
    Blockly.Msg.REPL_OK = "OK";
    Blockly.Msg.REPL_COMPANION_VERSION_CHECK = "Companion Version Check";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE = 'Your Companion App is out of date. Click "OK" to start the update. Watch your ';
    Blockly.Msg.REPL_EMULATORS = "emulator's";
    Blockly.Msg.REPL_DEVICES = "device's";
    Blockly.Msg.REPL_APPROVE_UPDATE = " screen because you will be asked to approve the update.";
    Blockly.Msg.REPL_NOT_NOW = "Not Now";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE1 = "The Companion you are using is out of date.<br/><br/>This Version of Makeroid should be used with Companion version";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE_IMMEDIATE = "You are using an out-of-date Companion. You should update the Makeroid Companion as soon as possible. If you have auto-update setup in the store, the update will happen by itself shortly.";
    Blockly.Msg.REPL_COMPANION_WRONG_PACKAGE = "The Companion you are using was built for different instance of Makeroid. To obtain the correct companion look on the Makeroid screen under Help->Companion Information menu.";
    Blockly.Msg.REPL_DISMISS = "Dismiss";
    Blockly.Msg.REPL_SOFTWARE_UPDATE = "Yazılım Güncelleştirmesi";
    Blockly.Msg.REPL_OK_LOWER = "Ok";
    Blockly.Msg.REPL_GOT_IT = "Got It";
    Blockly.Msg.REPL_UPDATE_INFO = 'The update is now being installed on your device. Watch your device (or emulator) screen and approve the software installation when prompted.<br /><br />IMPORTANT: When the update finishes, choose "DONE" (don\'t click "open"). Then go to Makeroid in your web browser, click the "Connect" menu and choose "Reset Connection".  Then reconnect the device.';

    Blockly.Msg.REPL_UPDATE_NO_UPDATE = "Herhangi bir güncelleme mevcut değil";
    Blockly.Msg.REPL_UPDATE_NO_CONNECTION = "Güncelleyebilmeniz için öncelikle bir yardımcıya bağlı olmanız gerekmektedir";
    Blockly.Msg.REPL_UNABLE_TO_UPDATE = "Unable to send update to device/emulator";
    Blockly.Msg.REPL_UNABLE_TO_LOAD = "Unable to load update from Makeroid server";
    Blockly.Msg.REPL_UNABLE_TO_LOAD_NO_RESPOND = "Unable to load update from Makeroid server (server not responding)";
    Blockly.Msg.REPL_NOW_DOWNLOADING = "We are now downloading update from the Makeroid Server, please standby";
    Blockly.Msg.REPL_RUNTIME_ERROR = "Runtime Error";
    Blockly.Msg.REPL_NO_ERROR_FIVE_SECONDS = "<br/><i>Note:</i>&nbsp;You will not see another error reported for 5 seconds.";
    Blockly.Msg.REPL_CONNECTING_USB_CABLE = "Connecting via USB Cable";
    Blockly.Msg.REPL_STARTING_EMULATOR = "Starting the Android Emulator<br/>Please wait: This might take a minute or two.";
    Blockly.Msg.REPL_CONNECTING = "Bağlanılıyor...";
    Blockly.Msg.REPL_CANCEL = "İptal et";
    Blockly.Msg.REPL_GIVE_UP = "Pes et";
    Blockly.Msg.REPL_KEEP_TRYING = "Denemeye Devam Et";
    Blockly.Msg.REPL_CONNECTION_FAILURE1 = "Connection Failure";
    Blockly.Msg.REPL_NO_START_EMULATOR = "We could not start the Makeroid Companion within the Emulator";
    Blockly.Msg.REPL_PLUGGED_IN_Q = "Plugged In?";
    Blockly.Msg.REPL_AI_NO_SEE_DEVICE = "Makeroid does not see your device, make sure the cable is plugged in and drivers are correct.";
    Blockly.Msg.REPL_HELPER_Q = "Helper?";
    Blockly.Msg.REPL_HELPER_NOT_RUNNING = 'The Makeroid Starter helper does not appear to be running<br /><a href="https://starter.makeroid.io" target="_blank">Need Help?</a>';
    Blockly.Msg.REPL_USB_CONNECTED_WAIT = "USB Connected, waiting ";
    Blockly.Msg.REPL_SECONDS_ENSURE_RUNNING = " seconds to ensure all is running.";
    Blockly.Msg.REPL_EMULATOR_STARTED = "Emulator started, waiting ";
    Blockly.Msg.REPL_STARTING_COMPANION_ON_PHONE = "Starting the Companion App on the connected phone.";
    Blockly.Msg.REPL_STARTING_COMPANION_IN_EMULATOR = "Starting the Companion App in the emulator.";
    Blockly.Msg.REPL_COMPANION_STARTED_WAITING = "Companion starting, waiting ";
    Blockly.Msg.REPL_VERIFYING_COMPANION = "Verifying that the Companion Started....";
    Blockly.Msg.REPL_CONNECT_TO_COMPANION = "Yardımcıya bağlan";
    Blockly.Msg.REPL_TRY_AGAIN1 = "Failed to Connect to the Makeroid Companion, try again.";
    Blockly.Msg.REPL_YOUR_CODE_IS = "Kodun";
    Blockly.Msg.REPL_DO_YOU_REALLY_Q = "Gerçekten mi?";
    Blockly.Msg.REPL_FACTORY_RESET = 'This will attempt to reset your Emulator to its "factory" state. If you had previously updated the Companion installed in the Emulator, you will likely have to do this again.';

// Messages from Blockly.js
    Blockly.Msg.WARNING_DELETE_X_BLOCKS = "Are you sure you want to delete all %1 of these blocks?";

// Blocklyeditor.js
    Blockly.Msg.GENERATE_YAIL = "Yail oluştur";
    Blockly.Msg.DO_IT = "Yap";
    Blockly.Msg.CLEAR_DO_IT_ERROR = "Temizleme Hatası";
    Blockly.Msg.CAN_NOT_DO_IT = "Yapamıyorum";
    Blockly.Msg.CONNECT_TO_DO_IT = 'Bunu kullanmak için bir yardımcıya veya emülatöre bağlı olmanız gerekmektedir "Yap"';

// Clock Component Menu Items
    Blockly.Msg.TIME_YEARS = "Yıl";
    Blockly.Msg.TIME_MONTHS = "Ay";
    Blockly.Msg.TIME_WEEKS = "Hafta";
    Blockly.Msg.TIME_DAYS = "Gün";
    Blockly.Msg.TIME_HOURS = "Saat";
    Blockly.Msg.TIME_MINUTES = "Dakika";
    Blockly.Msg.TIME_SECONDS = "Saniye";
    Blockly.Msg.TIME_DURATION = "Süre";
  }
};

// Initalize language definition to Turkish
Blockly.Msg.tr.switch_blockly_language_to_tr.init();
Blockly.Msg.tr.switch_language_to_turkish.init();
