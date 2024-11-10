<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
                    <el-col :span="12">
           <el-form-item v-if="flag=='gongzuorenyuan'"  label='工作人员姓名' prop="gongzuorenyuanName">
               <el-input v-model="ruleForm.gongzuorenyuanName"  placeholder='工作人员姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='gongzuorenyuan'" label='头像' prop="gongzuorenyuanPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.gongzuorenyuanPhoto?$base.url+ruleForm.gongzuorenyuanPhoto:''"
                         @change="gongzuorenyuanPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='gongzuorenyuan'"  label='联系方式' prop="gongzuorenyuanPhone">
               <el-input v-model="ruleForm.gongzuorenyuanPhone"  placeholder='联系方式' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='gongzuorenyuan'"  label='电子邮箱' prop="gongzuorenyuanEmail">
               <el-input v-model="ruleForm.gongzuorenyuanEmail"  placeholder='电子邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='jiashu'"  label='家属姓名' prop="jiashuName">
               <el-input v-model="ruleForm.jiashuName"  placeholder='家属姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='jiashu'" label='头像' prop="jiashuPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.jiashuPhoto?$base.url+ruleForm.jiashuPhoto:''"
                         @change="jiashuPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='jiashu'"  label='联系方式' prop="jiashuPhone">
               <el-input v-model="ruleForm.jiashuPhone"  placeholder='联系方式' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='jiashu'"  label='电子邮箱' prop="jiashuEmail">
               <el-input v-model="ruleForm.jiashuEmail"  placeholder='电子邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='jiashu'"  label='身份' prop="shenfenTypes">
                 <el-select v-model="ruleForm.shenfenTypes"  placeholder='请选择身份'>
                     <el-option
                             v-for="(item,index) in shenfenTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
        <el-col :span="12" v-if="flag=='jiashu' && ruleForm.yonghuId == null">
            <el-form-item class="select" label="老人" prop="yonghuId">
                <el-select v-model="ruleForm.yonghuId" filterable placeholder="请选择老人" @change="yonghuChange">
                    <el-option
                            v-for="(item,index) in yonghuOptions"
                            v-bind:key="item.id"
                                            :label="item.yonghuName"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='jiashu'" label='老人姓名' prop="yonghuName">
                 <el-input v-model="yonghuForm.yonghuName" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='jiashu'" label='头像' prop="yonghuPhoto">
                 <el-image
                     style="width: 100px; height: 100px"
                     :src="yonghuForm.yonghuPhoto?$base.url+yonghuForm.yonghuPhoto:''"
                     :fit="fit">
                 </el-image>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='jiashu'" label='身份证号' prop="yonghuIdNumber">
                 <el-input v-model="yonghuForm.yonghuIdNumber" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='jiashu'" label='联系方式' prop="yonghuPhone">
                 <el-input v-model="yonghuForm.yonghuPhone" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='jiashu'" label='电子邮箱' prop="yonghuEmail">
                 <el-input v-model="yonghuForm.yonghuEmail" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='jiashu'" label='年龄' prop="yonghuAge">
                 <el-input v-model="yonghuForm.yonghuAge" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='jiashu'" label='健康指标' prop="jiankangTypes">
                 <el-input v-model="yonghuForm.jiankangValue" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='jiashu'" label='逻辑删除' prop="yonghuDelete">
                 <el-input v-model="yonghuForm.yonghuDelete" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yisheng'"  label='医生工号' prop="yishengUuidNumber">
               <el-input v-model="ruleForm.yishengUuidNumber"  placeholder='医生工号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yisheng'"  label='医生名称' prop="yishengName">
               <el-input v-model="ruleForm.yishengName"  placeholder='医生名称' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yisheng'"  label='科室' prop="yishengTypes">
                 <el-select v-model="ruleForm.yishengTypes"  placeholder='请选择科室'>
                     <el-option
                             v-for="(item,index) in yishengTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='yisheng'"  label='职位' prop="zhiweiTypes">
                 <el-select v-model="ruleForm.zhiweiTypes"  placeholder='请选择职位'>
                     <el-option
                             v-for="(item,index) in zhiweiTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yisheng'"  label='职称' prop="yishengZhichneg">
               <el-input v-model="ruleForm.yishengZhichneg"  placeholder='职称' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yisheng'" label='医生头像' prop="yishengPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.yishengPhoto?$base.url+ruleForm.yishengPhoto:''"
                         @change="yishengPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yisheng'"  label='联系方式' prop="yishengPhone">
               <el-input v-model="ruleForm.yishengPhone"  placeholder='联系方式' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yisheng'"  label='预约须知' prop="yishengGuahao">
               <el-input v-model="ruleForm.yishengGuahao"  placeholder='预约须知' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yisheng'"  label='邮箱' prop="yishengEmail">
               <el-input v-model="ruleForm.yishengEmail"  placeholder='邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="24">
             <el-form-item v-if="flag=='yisheng'"  label="履历介绍" prop="yishengContent">
                 <editor
                         style="min-width: 200px; max-width: 600px;"
                         v-model="ruleForm.yishengContent"
                         class="editor"
                         action="file/upload">
                 </editor>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='老人姓名' prop="yonghuName">
               <el-input v-model="ruleForm.yonghuName"  placeholder='老人姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yonghu'" label='头像' prop="yonghuPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.yonghuPhoto?$base.url+ruleForm.yonghuPhoto:''"
                         @change="yonghuPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='身份证号' prop="yonghuIdNumber">
               <el-input v-model="ruleForm.yonghuIdNumber"  placeholder='身份证号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='联系方式' prop="yonghuPhone">
               <el-input v-model="ruleForm.yonghuPhone"  placeholder='联系方式' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='电子邮箱' prop="yonghuEmail">
               <el-input v-model="ruleForm.yonghuEmail"  placeholder='电子邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='年龄' prop="yonghuAge">
               <el-input v-model="ruleForm.yonghuAge"  placeholder='年龄' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yonghu'"  label='健康指标' prop="jiankangTypes">
                 <el-select v-model="ruleForm.jiankangTypes"  placeholder='请选择健康指标'>
                     <el-option
                             v-for="(item,index) in jiankangTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-form-item v-if="flag=='users'" label="用户名" prop="username">
             <el-input v-model="ruleForm.username"
                       placeholder="用户名"></el-input>
         </el-form-item>
         <el-col :span="12">
             <el-form-item v-if="flag!='users' && flag!='yisheng'"  label="性别" prop="sexTypes">
                 <el-select v-model="ruleForm.sexTypes" placeholder="请选择性别">
                     <el-option
                             v-for="(item,index) in sexTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item>
                 <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
             </el-form-item>
         </el-col>
     </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
        ruleForm: {},
        flag: '',
        usersFlag: false,
        // sexTypesOptions : [],
// 注册表 老人
    // 注册的类型字段 老人
        // 性别
        sexTypesOptions : [],
        // 健康指标
        jiankangTypesOptions : [],
// 注册表 社区工作人员
    // 注册的类型字段 社区工作人员
        // 性别
        sexTypesOptions : [],
// 注册表 家属
    // 注册的类型字段 家属
        // 性别
        sexTypesOptions : [],
        // 身份
        shenfenTypesOptions : [],
    // 注册的级联表 家属
        // 老人列表
        yonghuOptions : [],
        yonghuForm:{},
// 注册表 医生
    // 注册的类型字段 医生
        // 科室
        yishengTypesOptions : [],
        // 职位
        zhiweiTypesOptions : [],
    };
  },
  mounted() {
    //获取当前登录用户的信息
    var table = this.$storage.get("sessionTable");
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    if (this.role != "管理员"){
    }

    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
// 注册表 老人
// 注册表 社区工作人员
// 注册表 家属
    // 注册的级联表 家属
        if(table == 'jiashu'){
            this.yonghuChange(this.ruleForm.yonghuId);
        }
// 注册表 医生
      } else {
        this.$message.error(data.msg);
      }
    });

// 注册表 老人 的级联表
// 注册表 社区工作人员 的级联表
// 注册表 家属 的级联表
    // 注册的级联表 家属
        // 老人列表
    this.$http({
        url: `yonghu/page?page=1&limit=100`,
        method: "get"
    }).then(({ data }) => {
        if (data && data.code === 0) {
        this.yonghuOptions = data.data.list;
        }else{
            this.$message.error(data.msg);
        }
    });
// 注册表 医生 的级联表

      this.$http({
          url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
          method: "get"
      }).then(({ data }) => {
          if (data && data.code === 0) {
              this.sexTypesOptions = data.data.list;
          } else {
              this.$message.error(data.msg);
          }
      });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=shenfen_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.shenfenTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=yisheng_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.yishengTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=zhiwei_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.zhiweiTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=jiankang_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.jiankangTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
  },
  methods: {
    chongzhi() {
      this.$router.replace({ path: "/pay" });
    },
    gongzuorenyuanPhotoUploadChange(fileUrls) {
        this.ruleForm.gongzuorenyuanPhoto = fileUrls;
    },
    jiashuPhotoUploadChange(fileUrls) {
        this.ruleForm.jiashuPhoto = fileUrls;
    },
    yishengPhotoUploadChange(fileUrls) {
        this.ruleForm.yishengPhoto = fileUrls;
    },
    yonghuPhotoUploadChange(fileUrls) {
        this.ruleForm.yonghuPhoto = fileUrls;
    },
// 注册表的级联表
    yonghuChange(id){
        this.$http({
            url: `yonghu/info/`+id,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code === 0) {
                this.yonghuForm = data.data;
            }
        });
    },


    onUpdateHandler() {
                         if((!this.ruleForm.gongzuorenyuanName)&& 'gongzuorenyuan'==this.flag){
                             this.$message.error('工作人员姓名不能为空');
                             return
                         }

                         if((!this.ruleForm.gongzuorenyuanPhoto)&& 'gongzuorenyuan'==this.flag){
                             this.$message.error('头像不能为空');
                             return
                         }

                         if((!this.ruleForm.gongzuorenyuanPhone)&& 'gongzuorenyuan'==this.flag){
                             this.$message.error('联系方式不能为空');
                             return
                         }

                             if( 'gongzuorenyuan' ==this.flag && this.ruleForm.gongzuorenyuanEmail&&(!isEmail(this.ruleForm.gongzuorenyuanEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.jiashuName)&& 'jiashu'==this.flag){
                             this.$message.error('家属姓名不能为空');
                             return
                         }

                         if((!this.ruleForm.jiashuPhoto)&& 'jiashu'==this.flag){
                             this.$message.error('头像不能为空');
                             return
                         }

                         if((!this.ruleForm.jiashuPhone)&& 'jiashu'==this.flag){
                             this.$message.error('联系方式不能为空');
                             return
                         }

                             if( 'jiashu' ==this.flag && this.ruleForm.jiashuEmail&&(!isEmail(this.ruleForm.jiashuEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.shenfenTypes)&& 'jiashu'==this.flag){
                             this.$message.error('身份不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuId)&& 'jiashu'==this.flag){
                             this.$message.error('老人不能为空');
                             return
                         }

                         if((!this.ruleForm.yishengUuidNumber)&& 'yisheng'==this.flag){
                             this.$message.error('医生工号不能为空');
                             return
                         }

                         if((!this.ruleForm.yishengName)&& 'yisheng'==this.flag){
                             this.$message.error('医生名称不能为空');
                             return
                         }

                         if((!this.ruleForm.yishengTypes)&& 'yisheng'==this.flag){
                             this.$message.error('科室不能为空');
                             return
                         }

                         if((!this.ruleForm.zhiweiTypes)&& 'yisheng'==this.flag){
                             this.$message.error('职位不能为空');
                             return
                         }

                         if((!this.ruleForm.yishengZhichneg)&& 'yisheng'==this.flag){
                             this.$message.error('职称不能为空');
                             return
                         }

                         if((!this.ruleForm.yishengPhoto)&& 'yisheng'==this.flag){
                             this.$message.error('医生头像不能为空');
                             return
                         }

                         if((!this.ruleForm.yishengPhone)&& 'yisheng'==this.flag){
                             this.$message.error('联系方式不能为空');
                             return
                         }

                         if((!this.ruleForm.yishengGuahao)&& 'yisheng'==this.flag){
                             this.$message.error('预约须知不能为空');
                             return
                         }

                             if( 'yisheng' ==this.flag && this.ruleForm.yishengEmail&&(!isEmail(this.ruleForm.yishengEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.yishengContent)&& 'yisheng'==this.flag){
                             this.$message.error('履历介绍不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuName)&& 'yonghu'==this.flag){
                             this.$message.error('老人姓名不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuPhoto)&& 'yonghu'==this.flag){
                             this.$message.error('头像不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuIdNumber)&& 'yonghu'==this.flag){
                             this.$message.error('身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuPhone)&& 'yonghu'==this.flag){
                             this.$message.error('联系方式不能为空');
                             return
                         }

                             if( 'yonghu' ==this.flag && this.ruleForm.yonghuEmail&&(!isEmail(this.ruleForm.yonghuEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.yonghuAge)&& 'yonghu'==this.flag){
                             this.$message.error('年龄不能为空');
                             return
                         }

                         if((!this.ruleForm.jiankangTypes)&& 'yonghu'==this.flag){
                             this.$message.error('健康指标不能为空');
                             return
                         }

        if((!this.ruleForm.sexTypes) && this.flag!='users'){
            this.$message.error('性别不能为空');
            return
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
        this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
