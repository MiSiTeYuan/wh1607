<template>
  <div>
    <div id="content">
      <div class="panel">
        <div class="header">
          <ol class="breadcrumb">
            <li><a href="/">主页</a><span class="divider">/</span></li>
            <li class="active">发布</li>
          </ol>
        </div>
        <div class="inner post">
          <form id="create_topic_form">
            <fieldset>
              <span class="tab-selector">选择版块：</span>
              <select name="tab" id="tab-value">
                <option value="">请选择</option>
              </select>
              <span id="topic_create_warn"></span>
              <textarea
                v-model="form.title"
                autofocus
                class="span9"
                id="title"
                name="title"
                rows="1"
                placeholder="标题字数 10 字以上"
              >
              </textarea>

              <div class="markdown_editor in_editor">
                <div class="markdown_in_editor">
                  <textarea
                    v-model="form.content"
                    class="editor"
                    name="t_content"
                    rows="20"
                    placeholder="文章支持 Markdown 语法, 请注意标记代码"
                  ></textarea>

                  <div class="editor_buttons">
                    <input
                      class="span-primary submit_btn"
                      data-loading-text="提交中"
                      value="提交"
                      @click="submit"
                    />
                  </div>
                </div>
              </div>

              <input type="hidden" id="topic_tags" name="topic_tags" value="" />
              <input type="hidden" name="_csrf" value="<%= csrf %>" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import request from "../../utils/request";

export default {
  setup() {
    const count = ref(0);
    const title = ref("i am title");
    // 将 ref 暴露给模板
    const form = ref({
      title: "",
      content: "",
    });

    return {
      count,
      title,
      form,
    };
  },
  methods: {
    submit() {
      console.log("submit");
      request({
        url: "/topic/create",
        method: "post",
        data: { ...this.form },
      });
    },
  },
};
</script>

<style></style>
