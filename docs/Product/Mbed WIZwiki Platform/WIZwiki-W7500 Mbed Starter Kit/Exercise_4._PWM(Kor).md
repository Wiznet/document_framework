---
id: exercise_4_pwm_kor
title: Exercise 4. PWM(Kor)
date: 2020-04-08
---


## Content
# 튜토리얼 예제4. PWM을 이용해 부저 울리기

## 개요

이 예제는 PWM을 이용해 buzzer를 울리는 실습에 관한 것이다. PWM은 Pulse Width Modulation의
약자이다. 특정한 펄스의 폭을 가진 디지털 파형을 만드는 데 사용이된다. WIZwiki 보드의 W7500 칩 내부의
PWM 모듈을 설정하면 다양한 파형을 만들 수 있다. PWM을 이용해 높낮이가 다른 소리 출력, LED 밝기 조절, 모터 구동
등을 할 수 있다.

## 준비물

  - WIZwiki-W7500 보드
  - USB 케이블
  - Breadboard (빵판)
  - Jumper wire
  - Magnetic Buzzer

## 하드웨어

### 회로도

전체 회로도는 아래와 같다.

![](/products/wizwiki_mbed_kit/kit_kr/4_pwm_buzzer_schem.png)

### 연결도

![](/products/wizwiki_mbed_kit/kit_kr/4_board_all.jpg)

## 소프트웨어

### Example Code

예제 코드이다. mbed 환경에서 main.c에 아래 code를 복사해 붙여넣기 한 후 컴파일한다.

``` c
#include "mbed.h"

#define VOLUME 0.02
#define BPM 100.0

PwmOut pwm_pin(D3);

// Plays a sound with the defined frequency, duration, and volume
void playNote(float frequency, float duration, float volume) {
    pwm_pin.period(1.0/frequency);
    pwm_pin = volume/2.0;
    wait(duration);
    pwm_pin = 0.0;
}

int main()
{
    float beat_duration;

    // Calculate duration of a quarter note from bpm
    beat_duration = 60.0 / BPM;

    // Loop forever
    while(1) {

playNote(261.626, (0.75 * beat_duration), VOLUME);
playNote(329.628, (0.75 * beat_duration), VOLUME);
playNote(391.995, (0.75 * beat_duration), VOLUME);

playNote(261.626, (0.75 * beat_duration), VOLUME);
playNote(329.628, (0.75 * beat_duration), VOLUME);
playNote(391.995, (0.75 * beat_duration), VOLUME);
                        
playNote(440.000, (0.75 * beat_duration), VOLUME);
playNote(440.000, (0.75 * beat_duration), VOLUME);
playNote(440.000, (0.75 * beat_duration), VOLUME);
playNote(391.995, ((2 * beat_duration) - 0.1), VOLUME);
wait(0.1);

playNote(349.228, (0.75 * beat_duration), VOLUME);
playNote(349.228, (0.75 * beat_duration), VOLUME);
playNote(349.228, (0.75 * beat_duration), VOLUME);

playNote(329.628, (0.75 * beat_duration), VOLUME);
playNote(329.628, (0.75 * beat_duration), VOLUME);
playNote(329.628, (0.75 * beat_duration), VOLUME);

playNote(293.665, (0.75 * beat_duration), VOLUME);
playNote(293.665, (0.75 * beat_duration), VOLUME);
playNote(293.665, (0.75 * beat_duration), VOLUME);

//playNote(261.626, ((2 * beat_duration) - 0.1), VOLUME);
playNote(261.626, ((3 * beat_duration) - 0.1), VOLUME);
wait(0.1);

    }
}
```

### 실행 방법 및 결과

코드를 실행시키면, PWM 디지털 신호가 부저를 울려 간단한 음악이 연주된다.

## 학습 자료

  - PWM

🌎<https://en.wikipedia.org/wiki/Pulse-width_modulation>

  - Piano key frequencies

🌎<https://en.wikipedia.org/wiki/Piano_key_frequencies>

## 관련 링크

   * [스타터 킷 튜토리얼]()

## 다음 예제

   * [예제5. 가변저항기를 이용해 아날로그 값 읽어내기]()
