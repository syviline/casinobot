require: slotfilling/slotFilling.sc
  module = sys.zb-common
require: functions.js
theme: /

    state: Start
        q!: $regex</start>
        script:
            $session.field = [0,0,0,0,0,0,0,0,0] // 1 - крестик, 2 - нолик
        a: Твой ход

        state: Move
            q: $regex<[1-9]>
            script:
                $session.field[parseInt($request.query) - 1] = 1
                $session.field[randomMove($session.field)] = 2
            a: {{randomMove($session.field)}}
            go!: /ViewField
        
        state: NoMatch
            event: noMatch
            a: Не число
        
    state: ViewField || noContext = true
        a: {{$session.field.slice(0,3)}}\n{{$session.field.slice(3,6)}}\n{{$session.field.slice(6,9)}}
        go!: /CheckWin
    state: CheckWin || noContext = true
        a: {{checkWinAnswer(field)}}
    state: NoMatch
        event!: noMatch
        a: I do not understand. You said: {{$request.query}}