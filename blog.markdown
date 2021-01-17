---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---


<section>
    <div class="columns is-multiline is-mobile">
{% for post in site.posts %}
        <div class="column is-two-fifths">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="../{{ post.thumbnail }}" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ post.title }}</p>
                        <p class="subtitle is-6">
                            <time datetime="{{ post.date | date: "%d-%m-%Y" }}">{{ post.date | date_to_long_string }}</time>
                        </p>
                    </div>
                </div>
                    <div class="content">
                    {{ post.description }}
                        <br>
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="{{ post.url }}" class="card-footer-item">Llegir</a>
                </footer>
            </div>
        </div>
{% endfor %}
    </div>
</section>
