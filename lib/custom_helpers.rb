module CustomHelpers
  require 'json'
  def get_page_title(title)
    if title.empty? || title.downcase == 'homepage'
      "John Nguyen - Web UX and Front-end Developer in San Francisco"
    else
      "#{title} | John Nguyen - Web UX and Front-end Developer in San Francisco"
    end
  end

  def render_device_asset(asset_path, alt = 'Image alternate text', device = 'desktop', *additional_images)
    images = []
    additional_images.each do |image|
      images << image
    end
    if images.length > 0
      images << asset_path
    end
    attach_images = unless images.empty?
      attach_images = "data-device-images='#{images.to_json}' data-image-active='1'"
    end
    <<-HEREDOC
      <div class="work-item__device work-item__device--#{device} loading" #{attach_images}>
        <div class="work-item__device-inner">
          <div class="work-item__device-content">
            <img data-src="#{asset_path}" alt="#{alt}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
          </div>
        </div>
      </div>
    HEREDOC
  end
end