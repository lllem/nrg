<template>
<!-- eslint-disable vuejs-accessibility/label-has-for -->
  <div
  class="nrg-input"
  :class="{
    'focus': inFocus,
    'not-empty': notEmpty,
  }"
  >
    <input
    type="text"
    ref="input"
    :value="modelValue"
    :id="id"
    :placeholder="inFocus? placeholder : ''"
    class="nrg-input__intput"
    @focus="onFocus"
    @blur="onBlur"
    @change="onChange"
    @input="onChange"
    />
    <label
    v-if="label"
    :for="id"
    class="nrg-input__label"
    >
      {{ label }}
    </label>

    <span class="nrg-input__indicator"></span>

    <span class="nrg-input__helper">{{ helper }}</span>
  </div>

</template>

<script>
export default {
  name: 'text-input',

  setup() {},

  model: {},

  props: {
    modelValue: String,
    value: String,
    helper: String,
    label: String,
    placeholder: String,
  },

  data() {
    return {
      id: `input-text_${Math.random() * 1000000}`,
      inFocus: false,
      notEmpty: false,
    };
  },

  computed: {},

  methods: {
    onFocus() {
      this.inFocus = true;
      console.log('onFocus');
    },
    onBlur() {
      this.inputCheck();
      this.inFocus = false;
      console.log('onBlur');
    },
    onChange(event) {
      // this.$emit(event.type);
      this.emit(event);
      console.log('onChange');
    },
    emit(event) {
      console.log('emit');
      this.inputCheck();
      this.$emit('update:modelValue', event.target.value);
      console.log(event.target.value);
    },
    inputCheck() {
      this.notEmpty = Boolean(this.$refs.input.value);
    },
  },

  created() {},

  mounted() {
    this.inputCheck();
  },
};
</script>

<style lang="scss">
  @import '@/nrg/tokens/tokens.scss';

  $ctrl_height: 2rem;

  .nrg-input {
    position: relative;
    height: $ctrl_height;

    .nrg-input__intput {
      height: $ctrl_height;
      background: transparent;
      border: none;
      outline: none;
      width: 100%;
    }

    .nrg-input__label {
      position: absolute;
      left: 0;
      top: 0;
      line-height: $ctrl_height;
      pointer-events: none;
      transform-origin: top left;
      transition: 0.25s;
      color: $c_blue;
      font-weight: 600;
    }

    // helper

    .nrg-input__helper {
      position: absolute;
      left: 0;
      top: $ctrl_height;
      font-size: 75%;

      text-overflow: ellipsis;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
    }

    // _________________

    .nrg-input__indicator {
      height: 2px;
      display: inline-block;
      background-color: $c_blue; // 2DO
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    &.focus,
    &.not-empty {
      .nrg-input__label {
        transform: translateY(-50%) scale(80%);
      }
    }
  }
</style>

<!--
  eslint-disable max-len

  TODO

  helper ___________________

  - Может быть не только текстом, но и содержать ссылки. Как, например, предложение заполнить поле значением по-умолчанию

  - Обычно в одну строку, то что не поместилось - обрезается, но в таком случае нужно реализовать возможность прочитать его полностью: title для десктопов, поповер для тач-девайсов, возможно сделать бегущей строкой когда поле в фокусе

  - Комментарий может поменяться на сообщение об ошибке если поле невалидно

  ___________________

  - Учесть безопасные зоны для label и helper

  - Сделать placeholder не нативным, а кастомным и анимировать

  - Добавить валидацию и маски

  - Добавить иконки

  - Типы

  - Добавить счётчик количества знаков при ограничении количества символов

  - Добавить состояние когда идёт обмен данными с сервером

 -->
