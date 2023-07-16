<template>
  <div>
    <span @click="showModal">登录</span>
    <a-modal :visible="visible"
             :confirm-loading="confirmLoading"
             @cancel="handleCancel"
             @ok="handleOk"
             :footer="null">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1"
                    tab="用户登录">
          <el-form :model="ruleForm"
                   status-icon
                   :rules="rules"
                   ref="ruleForm"
                   label-width="100px"
                   class="demo-ruleForm">
            <el-form-item prop="pass">
              <i class="el-icon-message yx" />
              <el-input type="email"
                        v-model="ruleForm.pass"
                        autocomplete="off"
                        placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <i class="el-icon-lock yx" />
              <el-input type="password"
                        show-password
                        v-model="ruleForm.checkPass"
                        autocomplete="off"
                        placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="记住密码"
                             name="type"
                             :checked="true"></el-checkbox>
                <span class="forgetPass">忘记密码</span>
              </el-checkbox-group>
            </el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form>
        </a-tab-pane>
        <a-tab-pane key="2"
                    tab="用户注册">
          <el-form :model="ruleForm"
                   status-icon
                   :rules="rules"
                   ref="ruleForm"
                   label-width="100px"
                   class="demo-ruleForm">
            <el-form-item prop="userName">
              <i class="el-icon-user yx" />
              <el-input type="email"
                        v-model="ruleForm.pass"
                        autocomplete="off"
                        placeholder="用户姓名"></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <i class="el-icon-phone yx" />
              <el-input type="password"
                        v-model="ruleForm.checkPass"
                        autocomplete="off"
                        placeholder="电话"></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <i class="el-icon-message yx" />
              <el-input type="password"
                        v-model="ruleForm.checkPass"
                        autocomplete="off"
                        placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <i class="el-icon-lock yx" />
              <el-input type="password"
                        show-password
                        v-model="ruleForm.checkPass"
                        autocomplete="off"
                        placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item prop="NumberCode">
              <i class="el-icon-s-promotion yx" />
              <el-input type="password"
                        v-model="ruleForm.checkPass"
                        autocomplete="off"
                        placeholder="验证码"></el-input>
            </el-form-item>
            <el-form-item prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="记住密码"
                             name="type"
                             :checked="true"></el-checkbox>
                <span class="forgetPass">忘记密码</span>
              </el-checkbox-group>
            </el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form>
        </a-tab-pane>
      </a-tabs>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      visible: false,
      confirmLoading: false,
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
        type: [],
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      this.visible = false;
    },
    callback(key) {
      console.log(key);
    },
    showModal() {
      this.visible = true
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
}
</script>

<style lang="less" scoped>
@import "@/assets/css/mixin.less";
span {
  font-size: 14px;
  padding-left: 20px;
  color: gray;
  .transfrom;
  &:hover {
    color: @nav-color;
  }
}
/deep/ .el-form-item__content {
  box-sizing: border-box;
  position: relative;
  margin-left: 0px !important;
  .el-input__inner {
    padding-left: 40px;
  }

  .yx {
    .login-position;
  }
}
body::-webkit-scrollbar {
  width: 5px;
  background-color: transparent;
}

body::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 5px;
}
</style>